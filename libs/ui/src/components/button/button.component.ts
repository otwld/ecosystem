import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BackgroundColorClass,
  BorderColorClass,
  ButtonColorClass,
  ButtonDisplayClass,
  ButtonShapeClass,
  ButtonSizeClass,
  ButtonStateClass,
  ButtonStyleClass,
  EffectClass,
  TextColorClass,
} from '../../types/tailwind.types';
import { Icon } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'ui-button',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent extends BaseComponent<
  BackgroundColorClass | BorderColorClass | TextColorClass
> {
  @Input() color: ButtonColorClass | undefined = undefined;
  @Input() btnStyle: ButtonStyleClass | undefined = undefined;
  @Input() size: ButtonSizeClass | undefined = undefined;
  @Input() effect: EffectClass | undefined = undefined;
  @Input() shape: ButtonShapeClass | undefined = undefined;
  @Input() display: ButtonDisplayClass | undefined = undefined;
  @Input() state: ButtonStateClass | undefined = undefined;
  @Input() icon: Icon | undefined;

  override class = this.construct(
    () => 'btn',
    () => [
      this.color,
      this.btnStyle,
      this.size,
      this.effect,
      this.shape,
      this.display,
      this.state,
    ]
  );
}
