// Text
import { TwVariants } from '../../tailwind.types';
import { AllColor } from './color.types';
import { BorderDirection } from './border.types';
import { DurationUnit } from '../unit.types';

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

// General
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