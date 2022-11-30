// ring ring-primary ring-offset-base-100 ring-offset-2
import { AllColor } from './color.types';
import { Unit } from '../unit.types';

type RingBaseClass = 'ring';
export type RingColorClass = `ring-${AllColor}`;
export type RingWidthClass = `ring-${Unit}`;
export type RingOffsetColorClass = `ring-offset-${AllColor}`;
export type RingOffsetWidthClass = `ring-offset-${Unit}`;
export type RingClass =
  | RingBaseClass
  | RingColorClass
  | RingOffsetColorClass
  | RingOffsetWidthClass
  | RingWidthClass;
