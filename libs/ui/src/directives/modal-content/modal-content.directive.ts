import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[uiModalContent]'
})
export class ModalContentDirective {
  constructor(
    readonly vcr: ViewContainerRef
  ) {
  }
}
