export type CardImage = 'image-full';
export type CardPadding = 'card-normal' | 'card-compact';
export type CardDisplay = 'card-side';
export type CardStyle = 'card-bordered';
export type CardClass =
  | 'card'
  | CardStyle
  | CardImage
  | CardPadding
  | CardDisplay;
