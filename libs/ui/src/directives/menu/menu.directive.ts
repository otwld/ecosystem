import { Directive, HostBinding, Input } from '@angular/core';
import { constructComponentClasses } from '../../utils/tailwind.utils';
import {
  BackgroundColorClass, MenuDisplayClass,
  MenuPaddingClass,
  RoundedClass,
  TextColorClass
} from '../../types/tailwind.types';
import { BaseDirective } from '../base.directive';

@Directive({
  selector: '[uiMenu]',
  standalone: true,
})
export class MenuDirective extends BaseDirective {
  @Input() rounded: RoundedClass | undefined = undefined;
  @Input() padding: MenuPaddingClass = 'menu-normal';
  @Input() display: MenuDisplayClass = 'menu-horizontal';
  @Input() backgroundColor: BackgroundColorClass | undefined = undefined;
  @Input() textColor: TextColorClass | undefined = undefined;

  @HostBinding('class') override class = this.construct(
    () => ['menu'],
    () => [this.rounded, this.padding, this.backgroundColor, this.textColor, this.display]
  );
}
