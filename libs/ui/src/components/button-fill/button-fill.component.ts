import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Status } from '../../utils/tailwind.utils';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'ui-button-fill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-fill.component.html',
  styleUrls: ['./button-fill.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonFillComponent extends BaseComponent<string> {
  @Input() status: Status = 'primary';

  classes = {
    danger: 'btn-danger',
    basic: 'btn-basic',
    info: 'btn-info',
    control: 'btn-control',
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    success: 'btn-success',
    warning: 'btn-warning',
  };
}
