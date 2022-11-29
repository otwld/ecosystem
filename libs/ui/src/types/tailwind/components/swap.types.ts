export type SwapBaseClass = 'swap';
export type SwapActiveClass = 'swap-active';
export type SwapStateClass = 'swap-on' | 'swap-off';
export type SwapAnimationClass = 'swap-flip' | 'swap-rotate';
export type SwapClass =
  | SwapBaseClass
  | SwapActiveClass
  | SwapStateClass
  | SwapAnimationClass;
