import { BadgeClass } from './tailwind/components/badge.types';
import { BreadcrumbsClass } from './tailwind/components/breadcrumbs.types';
import { ButtonClass } from './tailwind/components/button.types';
import { CardClass } from './tailwind/components/card.types';
import { DrawerClass } from './tailwind/components/drawer.types';
import { DropdownClass } from './tailwind/components/dropdown.types';
import { HeroClass } from './tailwind/components/hero.types';
import { MenuClass } from './tailwind/components/menu.types';
import { ModalClass } from './tailwind/components/modal.types';
import { NavbarClass } from './tailwind/components/navbar.types';
import { SwapClass } from './tailwind/components/swap.types';
import { BackgroundClass } from './tailwind/utils/background.types';
import { BorderClass } from './tailwind/utils/border.types';
import { AlertClass } from './tailwind/components/alert.types';
import {
  BottomClass,
  ContainerClass,
  DisplayClass,
  DurationClass,
  EffectClass,
  FlexSizeClass,
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
} from './tailwind/utils/general.types';

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
