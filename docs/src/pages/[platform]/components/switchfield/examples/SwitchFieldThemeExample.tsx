import { SwitchField, ThemeProvider, Theme } from '@aws-amplify/ui-react';

const theme: Theme = {
  name: 'switchfield-theme',
  tokens: {
    components: {
      switchfield: {
        // States
        _disabled: {
          opacity: { value: '{opacities.60.value}' },
        },
        _focused: {
          shadow: {
            value: {
              offsetX: '0px',
              offsetY: '0px',
              blurRadius: '0px',
              spreadRadius: '2px',
              color: '{colors.border.focus.value}',
            },
          },
        },

        // Sizes
        large: {
          fontSize: { value: '{fontSizes.large.value}' },
        },
        small: {
          fontSize: { value: '{fontSizes.small.value}' },
        },

        // Child elements
        label: {
          padding: { value: '{space.xs.value}' },
        },

        thumb: {
          backgroundColor: { value: '{colors.background.primary.value}' },
          borderColor: { value: '{colors.border.tertiary.value}' },
          borderRadius: { value: '{radii.xxxl.value}' },
          checked: {
            transform: { value: '{transforms.slideX.medium.value}' },
          },
          transition: {
            duration: { value: '{time.medium.value}' },
          },
          width: { value: '{space.relative.medium.value}' },
        },

        track: {
          backgroundColor: { value: '{colors.background.quaternary.value}' },
          borderRadius: { value: '{radii.xxxl.value}' },
          checked: {
            backgroundColor: { value: '{colors.brand.primary.80.value}' },
          },
          height: { value: '{space.relative.medium.value}' },
          padding: { value: '{outlineWidths.medium.value}' },
          transition: {
            duration: { value: '{time.short.value}' },
          },
          width: { value: '{space.relative.xl.value}' },
        },
      },
      // is switch a subcomponent?
    },
  },
};

export const SwitchFieldThemeExample = () => (
  <ThemeProvider theme={theme}>
    <SwitchField label="Themed Switch" />
  </ThemeProvider>
);
