import * as React from 'react';
import { ButtonProps } from './button';
import { TextInputFieldProps } from './textField';

export interface PasswordFieldProps extends TextInputFieldProps {
  /**
   * For password fields, will hide the "show password" button
   */
  hideShowPassword?: boolean;

  /**
   * Set the `aria-label` for hide password button
   * @default "Hide password"
   */
  hidePasswordButtonLabel?: string;

  /**
   * Set the `aria-label` for show password button
   * @default "Show password"
   */
  showPasswordButtonLabel?: string;

  /**
   * Password autocomplete type
   * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#values
   * @default "current-password"
   */
  autoComplete?: 'new-password' | 'current-password' | string;

  /**
   * Forwarded ref for access to show password button DOM element
   */
  showPasswordButtonRef?: React.Ref<HTMLButtonElement>;
}

export type PasswordFieldType = 'password' | 'text';

export interface ShowPasswordButtonProps extends ButtonProps {
  fieldType: PasswordFieldType;

  /**
   * Set the `aria-label` for hide password button
   * @default "Hide password"
   */
  hidePasswordButtonLabel?: string;

  /**
   * Set the `aria-label` for show password button
   * @default "Show password"
   */
  showPasswordButtonLabel?: string;
}
