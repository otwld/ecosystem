import { TwVariants } from '../../tailwind.types';
import { OpacityUnit } from './general.types';
import { AllColor } from './color.types';

export type BackgroundBaseClass = 'bg';
export type BackgroundColorClass = TwVariants<`bg-${AllColor}`>;
export type BackgroundOpacityClass = TwVariants<`bg-opacity-${OpacityUnit}`>;
export type BackgroundURLClass =
  TwVariants<`${BackgroundBaseClass}-[url(${string})]`>;
export type BackgroundClass =
  | BackgroundColorClass
  | BackgroundOpacityClass
  | BackgroundURLClass;
