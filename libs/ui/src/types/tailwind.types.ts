// Color
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
  | 'white'
  | 'transparent';

// Background
export type BackgroundBaseClass = 'bg';
export type BackgroundColorClass = TwVariants<`bg-${AllColor}`>;
export type BackgroundOpacityClass = TwVariants<`bg-opacity-${OpacityUnit}`>;
export type BackgroundURLClass =
  TwVariants<`${BackgroundBaseClass}-[url(${string})]`>;
export type BackgroundClass =
  | BackgroundColorClass
  | BackgroundOpacityClass
  | BackgroundURLClass;

// Breadcrumbs
export type BreadcrumbsClass = 'breadcrumbs';

// Text
export type TextColorClass = TwVariants<`text-${AllColor}`>;

// Opacity
export type OpacityUnit =
  | 0
  | 5
  | 10
  | 20
  | 25
  | 30
  | 40
  | 50
  | 60
  | 70
  | 75
  | 80
  | 90
  | 95
  | 100;
export type OpacityClass = TwVariants<`opacity-${OpacityUnit}`>;

// Border
type BorderWidth = 0 | 1 | 2 | 4 | 8;
type BorderDirection = 'b' | 't' | 'l' | 'r' | 'x' | 'y';
export type BorderClass = BorderColorClass | BorderWidthClass;
export type BorderColorClass = TwVariants<
  `border-${BorderDirection}-${AllColor}` | `border-${AllColor}`
>;
export type BorderWidthClass = TwVariants<
  | `border-${BorderDirection}-${BorderWidth}`
  | `border-${BorderDirection}`
  | `border-${BorderWidth}`
>;

// General
type DurationUnit = 100 | 200 | 300;
export type DurationClass = `duration-${DurationUnit}`;
export type TransitionClass = 'transition-opacity' | 'transition-colors';
export type OverflowClass = 'overflow-hidden';
export type ContainerClass = 'container';
export type RoundedClass = 'rounded' | 'rounded-box';
type Unit = 0 | 1 | 2 | 4 | 8 | 12 | 16 | 24 | 32 | 48 | 64 | 96 | 128 | 256;

export type SpaceClass = TwVariants<`space-${'x' | 'y'}-${Unit}`>;
export type BottomClass = TwVariants<`bottom-${Unit}`>;
export type RightClass = TwVariants<`right-${Unit}`>;
export type PositionClass = TwVariants<
  'relative' | 'absolute' | 'fixed' | 'sticky'
>;

export type StateClass = 'active' | 'disabled';
export type HeightClass = 'h-full' | `h-${Unit}`;
export type WidthClass = 'w-full' | `w-${Unit}`;
export type MaxHeightClass = 'max-h-full';
export type MaxWidthClass = 'max-w-full';
export type MinHeightClass = 'min-h-screen';
export type EffectClass = 'glass' | 'loading' | 'no-animation';
export type DisplayClass = 'flex' | 'inline-flex' | 'block' | 'inline-block';
export type PaddinClass = `p${BorderDirection}-${Unit}`;
export type Size = 'xs' | 'sm' | 'md' | 'lg';
export type Shape = 'circle' | 'square';
export type FlexSizeClass = 'flex-0' | 'flex-1' | 'flex-none';

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
export type ButtonClass =
  | ButtonDisplayClass
  | ButtonShapeClass
  | ButtonSizeClass
  | ButtonStateClass
  | ButtonStyleClass
  | ButtonColorClass
  | 'btn';

// Card
export type CardImage = 'image-full';
export type CardPadding = 'card-normal' | 'card-compact';
export type CardDisplay = 'card-side';
export type CardStyle = 'card-bordered';
export type CardClass =
  | 'card'
  | CardStyle
  | CardImage
  | CardPadding
  | CardDisplay;

// Hero
export type HeroClass = 'hero' | 'hero-overlay' | 'hero-content';

// Menu
export type MenuBaseClass = 'menu';
export type MenuPaddingClass = `menu-${'normal' | 'compact'}`;
export type MenuDisplayClass = 'menu-vertical' | 'menu-horizontal';
export type MenuTitleBaseClass = 'menu-title';
export type MenuItemStateClass = 'active';
export type MenuClass =
  | MenuItemStateClass
  | MenuBaseClass
  | MenuPaddingClass
  | MenuDisplayClass
  | MenuTitleBaseClass;

// Navbar
export type NavbarBaseClass = 'navbar';
export type NavbarStartClass = 'navbar-start';
export type NavbarEndClass = 'navbar-end';
export type NavbarCenterClass = 'navbar-center';
export type NavbarClass =
  | NavbarBaseClass
  | NavbarStartClass
  | NavbarEndClass
  | NavbarCenterClass;

// Badge
export type BadgeBaseClass = 'badge';
export type BadgeColorClass = `badge-${ColorBrand | ColorState}`;
export type BadgeSizeClass = `badge-${Size}`;
export type BadgeStyleClass = 'badge-outline' | 'badge-ghost';
export type BadgeClass =
  | BadgeBaseClass
  | BadgeColorClass
  | BadgeSizeClass
  | BadgeStyleClass;

// Modal
export type ModalBaseClass = 'modal';
export type ModalBoxClass = 'modal-box';
export type ModalActionClass = 'modal-action';
// export type ModalToggleClass = 'modal-toggle';
export type ModalStateClass = 'modal-open';
export type ModalPositionClass = TwVariants<'modal-bottom' | 'modal-middle'>;
export type ModalClass =
  | ModalBaseClass
  | ModalBoxClass
  | ModalActionClass
  // | ModalToggleClass
  | ModalStateClass
  | ModalPositionClass;

// Swap
export type SwapBaseClass = 'swap';
export type SwapActiveClass = 'swap-active';
export type SwapStateClass = 'swap-on' | 'swap-off';
export type SwapAnimationClass = 'swap-flip' | 'swap-rotate';
export type SwapClass = SwapBaseClass | SwapActiveClass | SwapStateClass | SwapAnimationClass;

// Dropdown
export type DropdownBaseClass = 'dropdown';
export type DropdownContentClass = 'dropdown-content';
export type DropdownPositionClass = 'dropdown-end' | 'dropdown-top' | 'dropdown-bottom' | 'dropdown-left' | 'dropdown-right';
export type DropdownHoverClass = 'dropdown-hover';
export type DropdownStateClass = 'dropdown-open';
export type DropdownClass = DropdownBaseClass | DropdownContentClass | DropdownPositionClass | DropdownHoverClass | DropdownStateClass;

export type DrawerBaseClass = 'drawer';
export type DrawerContentClass = 'drawer-content';
export type DrawerSideClass = 'drawer-side';
export type DrawerOverlayClass = 'drawer-overlay';
export type DrawerToggleClass = 'drawer-toggle';
export type DrawerPositionClass = 'drawer-end';
export type DrawerModeClass = 'drawer-mobile';
export type DrawerClass = DrawerBaseClass | DrawerContentClass | DrawerSideClass | DrawerOverlayClass | DrawerToggleClass | DrawerPositionClass | DrawerModeClass;

export type ThemeClass =
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
  | DisplayClass
  | PaddinClass
  | HeroClass
  | OpacityClass
  | BackgroundClass
  | MinHeightClass
  | BreadcrumbsClass
  | StateClass
  | MenuClass
  | ContainerClass
  | RoundedClass
  | NavbarClass
  | FlexSizeClass
  | BadgeClass
  | ModalClass
  | SpaceClass
  | SwapClass
  | DrawerClass
  | DropdownClass
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
