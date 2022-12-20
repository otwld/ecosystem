import { BadgeClass } from './components/badge.types';
import { BreadcrumbsClass } from './components/breadcrumbs.types';
import { ButtonClass } from './components/button.types';
import { CardClass } from './components/card.types';
import { DrawerClass } from './components/drawer.types';
import { DropdownClass } from './components/dropdown.types';
import { HeroClass } from './components/hero.types';
import { MenuClass } from './components/menu.types';
import { ModalClass } from './components/modal.types';
import { NavbarClass } from './components/navbar.types';
import { SwapClass } from './components/swap.types';
import { BackgroundClass } from './utils/background.types';
import { BorderClass } from './utils/border.types';
import { RingClass } from './utils/ring.types';
import { AlertClass } from './components/alert.types';
import { AvatarClass } from './components/avatar.types';
import {
  BottomClass,
  ContainerClass,
  DisplayClass,
  DurationClass,
  EffectClass,
  FlexContentClass,
  FlexDirectionClass,
  FlexItemsClass,
  FlexSizeClass,
  GapClass,
  HeightClass,
  MaxHeightClass,
  MaxWidthClass,
  MinHeightClass,
  OpacityClass,
  OverflowClass,
  PaddinClass,
  PositionClass,
  RightClass,
  RoundedClass,
  SpaceClass,
  StateClass,
  TextColorClass,
  TransitionClass,
  WidthClass,
} from './utils/general.types';
import { MaskClass } from './components/mask.types';
import { CarouselClass } from './components/carousel.types';
import { TabClass } from './components/tab.types';
import { AnimationClass } from './animation.types';

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
  | AlertClass
  | AvatarClass
  | RingClass
  | MaskClass
  | CarouselClass
  | FlexContentClass
  | GapClass
  | TabClass
  | FlexItemsClass
  | FlexDirectionClass
  | AnimationClass
  | undefined;

export type ThemeClassOrArray = ThemeClass[] | ThemeClass;

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type Variant = 'hover' | 'focus' | 'active' | 'disabled' | 'before' | 'after';

export type NegativeVariant<T extends string> = T | `-${T}`;

export type TwVariants<T extends string> =
  | T
  | `!${T}`
  | `${Variant}:${T}`
  | `${Breakpoint}:${T}`
  | `${Variant}:!${T}`;
// | `${TPseudoClassVariants}${T}`
// | `${TPseudoClassVariants}!${T}`
// | TTailwindString;
