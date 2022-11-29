export type ColorBrand = 'primary' | 'secondary' | 'accent' | 'neutral';
export type ColorState = 'info' | 'success' | 'warning' | 'error';
export type ColorBase = 'base';
export type Colors = ColorBrand | ColorState | ColorBase;
export type ColorBaseShades = 100 | 200 | 300;

export type ColorContent = 'content';
export type ColorFocus = 'focus';

export type ColorBrandWithState =
  | `${ColorBrand}-${ColorContent | ColorFocus}`
  | ColorBrand;
export type ColorStateWithState = `${ColorState}-${ColorContent}` | ColorState;
export type ColorBaseState =
  | `${ColorBase}-${ColorBaseShades}`
  | `${ColorBase}-${ColorContent}`
  | ColorBase;

export type AllColor =
  | ColorBaseState
  | ColorStateWithState
  | ColorBrandWithState
  | 'white'
  | 'transparent';
