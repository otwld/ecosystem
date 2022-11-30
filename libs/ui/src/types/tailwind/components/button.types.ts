import { ColorBrand, ColorState } from '../utils/color.types';
import { Shape, DaisyComponentSize } from '../utils/general.types';

export type ButtonColorClass = `btn-${ColorBrand | ColorState}`;
type ButtonStyle = 'ghost' | 'link' | 'outline';
export type ButtonStyleClass = `btn-${ButtonStyle}`;
type ButtonState = 'active' | 'disabled';
export type ButtonStateClass = `btn-${ButtonState}`;
export type ButtonSizeClass = `btn-${DaisyComponentSize}`;
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
