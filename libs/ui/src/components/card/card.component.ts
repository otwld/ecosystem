import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base.component';
import { Status } from '../../utils/tailwind.utils';
import { TBackgroundColor, TTextColor } from '../../types/tailwind.types';

@Component({
  selector: 'ui-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent extends BaseComponent<
  TBackgroundColor | TTextColor
> {
  @Input() status: Status = 'primary';

  classes = {
    basic: 'bg-base-100 text-base-content',
    control: 'bg-base-100 text-base-content',
    danger: 'bg-danger text-danger-content',
    info: 'bg-info text-info-content',
    primary: 'bg-primary text-primary-content',
    secondary: 'bg-secondary text-secondary-content',
    success: 'bg-success text-success-content',
    warning: 'bg-warning text-warning-content',
  };
}
