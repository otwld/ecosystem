import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'ui-modal-title-description',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  template: `
    <h3 class="text-lg font-bold">{{title}}</h3>
    <p class="py-4">
      {{description}}
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalTitleDescriptionComponent extends ModalComponent {
  @Input() title = '';
  @Input() description = '';
  constructor() {
    super();
  }
}
