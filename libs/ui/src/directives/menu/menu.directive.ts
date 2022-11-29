import { Directive, HostBinding, Input } from '@angular/core';
import { BaseDirective } from '../base.directive';
import { RoundedClass, TextColorClass } from '../../types/tailwind/utils/general.types';
import { MenuDisplayClass, MenuPaddingClass } from '../../types/tailwind/components/menu.types';
import { BackgroundColorClass } from '../../types/tailwind/utils/background.types';

@Directive({
  selector: '[uiMenu]',
  standalone: true,
})
export class MenuDirective extends BaseDirective {
  @Input() rounded: RoundedClass | undefined = undefined;
  @Input() padding: MenuPaddingClass = 'menu-normal';
  @Input() display: MenuDisplayClass = 'menu-vertical';
  @Input() backgroundColor: BackgroundColorClass | undefined = undefined;
  @Input() textColor: TextColorClass | undefined = undefined;

  @HostBinding('class') override class = this.construct(
    () => ['menu'],
    () => [
      this.rounded,
      this.padding,
      this.backgroundColor,
      this.textColor,
      this.display,
    ]
  );
}
