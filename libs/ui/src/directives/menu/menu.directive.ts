import { Directive, HostBinding, Input } from '@angular/core';
import { constructComponentClasses } from '../../utils/tailwind.utils';
import {
  BackgroundColorClass,
  MenuPaddingClass,
  RoundedClass,
} from '../../types/tailwind.types';

@Directive({
  selector: '[uiMenu]',
  standalone: true,
})
export class MenuDirective {
  @Input() rounded: RoundedClass | undefined = undefined;
  @Input() padding: MenuPaddingClass = 'menu-normal';
  @Input() backgroundColor: BackgroundColorClass | undefined = undefined;

  @HostBinding('class') hostClasses = constructComponentClasses(
    ['menu'],
    [this.rounded, this.padding, this.backgroundColor]
  );
}
