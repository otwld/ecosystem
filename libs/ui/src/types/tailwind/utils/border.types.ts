import { TwVariants } from '../theme.types';
import { AllColor } from './color.types';

type BorderWidth = 0 | 1 | 2 | 4 | 8;
export type BorderDirection = 'b' | 't' | 'l' | 'r' | 'x' | 'y';
export type BorderClass = BorderColorClass | BorderWidthClass;
export type BorderColorClass = TwVariants<
  `border-${BorderDirection}-${AllColor}` | `border-${AllColor}`
>;
export type BorderWidthClass = TwVariants<
  | `border-${BorderDirection}-${BorderWidth}`
  | `border-${BorderDirection}`
  | `border-${BorderWidth}`
>;
