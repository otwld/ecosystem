import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  CardBodyComponent,
  CardComponent,
  CardTitleDirective,
} from '../card/card.component';
import { BaseComponent } from '../base.component';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { TextColorClass } from '../../types/tailwind/utils/general.types';

@Component({
  selector: 'ui-card-icon',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    FontAwesomeModule,
    CardBodyComponent,
    CardTitleDirective,
  ],
  templateUrl: './card-icon.component.html',
  styleUrls: ['./card-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardIconComponent extends BaseComponent {
  @Input() icon: IconDefinition | undefined = undefined;
  @Input() iconColor: TextColorClass | undefined = undefined;
  @Input() titleColor: TextColorClass | undefined = undefined;

  // TODO: Implement opinionated Colors implementation.
}
