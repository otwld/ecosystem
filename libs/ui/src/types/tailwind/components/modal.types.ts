import { TwVariants } from '../../tailwind.types';

export type ModalBaseClass = 'modal';
export type ModalBoxClass = 'modal-box';
export type ModalActionClass = 'modal-action';
// export type ModalToggleClass = 'modal-toggle';
export type ModalStateClass = 'modal-open';
export type ModalPositionClass = TwVariants<'modal-bottom' | 'modal-middle'>;
export type ModalClass =
  | ModalBaseClass
  | ModalBoxClass
  | ModalActionClass
  // | ModalToggleClass
  | ModalStateClass
  | ModalPositionClass;
