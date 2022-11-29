export type MenuBaseClass = 'menu';
export type MenuPaddingClass = `menu-${'normal' | 'compact'}`;
export type MenuDisplayClass = 'menu-vertical' | 'menu-horizontal';
export type MenuTitleBaseClass = 'menu-title';
export type MenuItemStateClass = 'active';
export type MenuClass =
  | MenuItemStateClass
  | MenuBaseClass
  | MenuPaddingClass
  | MenuDisplayClass
  | MenuTitleBaseClass;
