export type ColorBrand = 'primary' | 'secondary' | 'accent' | 'neutral';
export type ColorState = 'info' | 'success' | 'warning' | 'error';
type ColorBase = 'base';
export type Colors = ColorBrand | ColorState | ColorBase;
type ColorBaseShades = 100 | 200 | 300;

type ColorContent = 'content';
type ColorFocus = 'focus';

type ColorBrandWithState =
  | `${ColorBrand}-${ColorContent | ColorFocus}`
  | ColorBrand;
type ColorStateWithState = `${ColorState}-${ColorContent}` | ColorState;
type ColorBaseState =
  | `${ColorBase}-${ColorBaseShades}`
  | `${ColorBase}-${ColorContent}`
  | ColorBase;

type AllColor =
  | ColorBaseState
  | ColorStateWithState
  | ColorBrandWithState
  | 'white';

type BorderWidth = 0 | 1 | 2 | 4 | 8;

export type BackgroundColorClass = TwVariants<`bg-${AllColor}`>;
export type TextColorClass = TwVariants<`text-${AllColor}`>;
export type BorderColorClass = TwVariants<`border-${AllColor}`>;
export type BorderWidthClass = TwVariants<`border-${BorderWidth}`>;

export type BorderClass = BorderColorClass | BorderWidthClass;

export type Size = 'xs' | 'sm' | 'md' | 'lg';
export type Shape = 'circle' | 'square';
// General
export type EffectClass = 'glass' | 'loading' | 'no-animation';

// Button
export type ButtonColorClass = `btn-${ColorBrand | ColorState}`;
type ButtonStyle = 'ghost' | 'link' | 'outline';
export type ButtonStyleClass = `btn-${ButtonStyle}`;
type ButtonState = 'active' | 'disabled';
export type ButtonStateClass = `btn-${ButtonState}`;
export type ButtonSizeClass = `btn-${Size}`;
export type ButtonShapeClass = `btn-${Shape}`;
type ButtonDisplay = 'wide' | 'block';
export type ButtonDisplayClass = `btn-${ButtonDisplay}`;

// Card
export type CardImage = 'image-full';
export type CardPadding = 'card-normal' | 'card-compact';
export type CardDisplay = 'card-side';
export type CardStyle = 'card-bordered';
export type CardClass = 'card' | CardStyle | CardImage | CardPadding | CardDisplay;

export type ButtonClass =
  | ButtonDisplayClass
  | ButtonShapeClass
  | ButtonSizeClass
  | ButtonStateClass
  | ButtonStyleClass
  | ButtonColorClass
  | 'btn';

type DurationUnit = 100 | 200 | 300;
export type DurationClass = `duration-${DurationUnit}`;
export type TransitionClass = 'transition-opacity' | 'transition-colors';
export type OverflowClass = 'overflow-hidden';

type Unit = 0 | 1 | 2 | 4 | 8;
export type BottomClass = TwVariants<`bottom-${Unit}`>;
export type RightClass = TwVariants<`right-${Unit}`>;
export type PositionClass = TwVariants<'relative' | 'absolute' | 'fixed' | 'sticky'>;

export type HeightClass = 'h-full' | `h-${Unit}`;
export type WidthClass = 'w-full' | `w-${Unit}`;
export type MaxHeightClass = 'max-h-full';
export type MaxWidthClass = 'max-w-full';
export type ThemeClass =
  | BackgroundColorClass
  | TextColorClass
  | BorderClass
  | ButtonClass
  | EffectClass
  | CardClass
  | TransitionClass
  | PositionClass
  | DurationClass
  | OverflowClass
  | BottomClass
  | RightClass
  | HeightClass
  | WidthClass
  | MaxHeightClass
  | MaxWidthClass
  | undefined;

export type ThemeClassOrArray = ThemeClass[] | ThemeClass;

type Variant = 'hover' | 'focus' | 'active' | 'disabled' | 'before' | 'after';

export type TwVariants<T extends string> =
  | T
  | `!${T}`
  | `${Variant}:${T}`
  | `${Variant}:!${T}`;
// | `${TPseudoClassVariants}${T}`
// | `${TPseudoClassVariants}!${T}`
// | TTailwindString;
