import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'ui-modal-title-description',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="h-[80vh] bg-neutral">test</div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalTestComponent extends ModalComponent {
  @Input() title = '';
  @Input() description = '';

  constructor() {
    super();
  }
}
