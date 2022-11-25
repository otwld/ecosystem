import { Directive, HostBinding, Input } from '@angular/core';
import { MenuTitleBaseClass } from '../../../types/tailwind.types';
import { BaseDirective } from '../../base.directive';

@Directive({
  selector: '[uiMenuItem]',
  standalone: true,
})
export class MenuItemDirective extends BaseDirective {
  @Input() menuTitle: MenuTitleBaseClass | undefined = undefined;
  @HostBinding('class') override class = this.construct(
    () => [],
    () => [this.menuTitle]
  );
}
