export type Status =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'basic'
  | 'control';

export type AdditionalClasses<T extends string> = TwVariants<T>;

export type TwVariants<T extends string> =
  | T
  | `!${T}`
  // | `${TPseudoClassVariants}${T}`
  // | `${TPseudoClassVariants}!${T}`
  // | TTailwindString;
