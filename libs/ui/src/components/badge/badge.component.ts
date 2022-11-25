import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base.component';
import { BadgeColorClass, BadgeSizeClass, BadgeStyleClass } from '../../types/tailwind.types';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'ui-badge',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent extends BaseComponent {
  @Input() color: BadgeColorClass | undefined = undefined;
  @Input() badgeSize: BadgeSizeClass | undefined = undefined;
  @Input() style: BadgeStyleClass | undefined = undefined;
  @Input() icon: IconDefinition | undefined = undefined;
  @Input() iconSlot: 'start' | 'end' = 'start';

  @HostBinding('class') override class = this.construct(
    () => ['badge'],
    () => [this.color, this.badgeSize, this.style]
  );
}
