import { ColorBrand, ColorState } from '../utils/color.types';
import { Size } from '../utils/general.types';

export type BadgeBaseClass = 'badge';
export type BadgeColorClass = `badge-${ColorBrand | ColorState}`;
export type BadgeSizeClass = `badge-${Size}`;
export type BadgeStyleClass = 'badge-outline' | 'badge-ghost';
export type BadgeClass =
  | BadgeBaseClass
  | BadgeColorClass
  | BadgeSizeClass
  | BadgeStyleClass;
