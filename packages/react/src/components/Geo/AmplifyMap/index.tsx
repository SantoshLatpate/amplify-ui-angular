import { mapMachine } from '@aws-amplify/ui';
import { useInterpret, useSelector } from '@xstate/react';
import { identity } from 'lodash';
import maplibregl from 'maplibre-gl';
import { AmplifyMapLibreRequest } from 'maplibre-gl-js-amplify';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactMapGL from 'react-map-gl';

import { Loader, View } from '../../../primitives';

export const AmplifyMap = ({ children, style, ...rest }: any) => {
  const mapRef = useRef<any>();
  const [transformRequest, setTransformRequest] = useState<any>();
  const service = useInterpret(mapMachine);
  const { send } = service;
  const state: any = useSelector(service, identity);

  const styleProps = {
    height: '100vh',
    position: 'relative',
    width: '100%',
    ...(state.matches('transitioning') ? { pointerEvents: 'none' } : {}),
    ...style,
  };

  const handleMapMoveStart = useCallback(
    ({ target: map }) => {
      if (map.isMoving()) {
        send('TRANSITION_START');
      }
    },
    [send]
  );

  const handleMapMoveEnd = useCallback(() => {
    send('TRANSITION_END');
  }, [state.value, send]);

  useEffect(() => {
    const makeRequestTransformer = async () => {
      if (state.context.credentials != null) {
        const { transformRequest: amplifyTransformRequest } =
          new AmplifyMapLibreRequest(
            state.context.credentials,
            state.context.config.region
          );
        setTransformRequest(() => amplifyTransformRequest);
      }
    };

    makeRequestTransformer();
  }, [state.context.credentials]);

  useEffect(() => {
    if (transformRequest && mapRef.current) {
      const map = mapRef.current?.getMap();

      map.on('movestart', handleMapMoveStart);
      map.on('moveend', handleMapMoveEnd);

      return () => {
        map.off('movestart', handleMapMoveStart);
        map.off('moveend', handleMapMoveEnd);
      };
    }
  }, [transformRequest, handleMapMoveEnd, handleMapMoveStart]);

  return transformRequest ? (
    <View data-amplify-map>
      <ReactMapGL
        ref={mapRef}
        mapLib={maplibregl}
        transformRequest={transformRequest}
        mapStyle={state.context.config.mapId}
        style={styleProps}
        {...rest}
      >
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { mapRef })
        )}
      </ReactMapGL>
    </View>
  ) : (
    <Loader size="large" variation="linear" />
  );
};