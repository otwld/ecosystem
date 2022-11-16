import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from '../card/card.component';
import { BaseComponent } from '../base.component';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Status } from '../../utils/tailwind.utils';

@Component({
  selector: 'ui-card-icon',
  standalone: true,
  imports: [CommonModule, CardComponent, FontAwesomeModule],
  templateUrl: './card-icon.component.html',
  styleUrls: ['./card-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardIconComponent extends BaseComponent {
  @Input() icon: IconDefinition | undefined;
  @Input() status: Status = 'primary';
  classes = {
    danger: 'text-danger',
    primary: 'text-primary',
    secondary: 'text-secondary',
    success: 'text-success',
    warning: 'text-warning',
    info: 'text-info',
    basic: 'text-basic',
    control: 'text-base-100',
  };

  constructor() {
    super();
  }
}
