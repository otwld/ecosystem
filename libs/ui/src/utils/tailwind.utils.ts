import {
  ThemeClass,
  ThemeClassOrArray,
  TwVariants,
} from '../types/tailwind.types';

export type AdditionalClasses<T extends string> = TwVariants<T>;

export const tw = (...args: ThemeClass[]) => {
  return args;
};
export const twInline = (...args: (ThemeClassOrArray | '' | undefined)[]) => {
  return args
    .map((arg) => (Array.isArray(arg) ? arg.join(' ') : arg))
    .join(' ');
};

export const constructComponentClasses = (
  componentClasses: ThemeClassOrArray,
  modifiers: ThemeClassOrArray[]
) => `${twInline(componentClasses)} ${twInline(...modifiers)}`;
