import { Directive, HostBinding, Input } from '@angular/core';
import { BaseDirective } from '../../base.directive';
import { MenuItemStateClass, MenuTitleBaseClass } from '../../../types/tailwind/components/menu.types';

@Directive({
  selector: '[uiMenuItem]',
  standalone: true,
})
export class MenuItemDirective extends BaseDirective {
  @Input() menuTitle: MenuTitleBaseClass | undefined = undefined;
  @Input() active: MenuItemStateClass | undefined = undefined;
  @HostBinding('class') override class = this.construct(
    () => [],
    () => [this.menuTitle, this.active]
  );
}
