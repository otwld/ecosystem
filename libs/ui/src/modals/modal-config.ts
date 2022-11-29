import { Type } from '@angular/core';
import { ModalPositionClass } from '../types/tailwind/components/modal.types';

export interface ModalConfig<T> {
  portalContent: Type<T>;
  portalData: { [key in keyof T]: T[keyof T] };
  modalPosition: ModalPositionClass[];
  disableClose: boolean;
}
