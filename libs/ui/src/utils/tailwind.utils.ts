import { TPseudoClassVariants, TTailwindString } from '../types/tailwind.types';

export type Status =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'basic'
  | 'control';
export type TWVmMap<Keys extends string = ''> = Keys extends ''
  ? Record<Status, TTailwindString>
  : Record<Status, Record<Keys, TTailwindString>>;
export type AdditionalClasses<T extends string> = TwVariants<T>;

export type TwVariants<T extends string> =
  | T
  | `!${T}`
  | `${TPseudoClassVariants}${T}`
  | `${TPseudoClassVariants}!${T}`
  | TTailwindString;
