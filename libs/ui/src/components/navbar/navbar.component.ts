import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base.component';
import { ContainerClass, FlexSizeClass, TextColorClass } from '../../types/tailwind/utils/general.types';
import { BackgroundColorClass } from '../../types/tailwind/utils/background.types';
import { NavbarCenterClass, NavbarEndClass, NavbarStartClass } from '../../types/tailwind/components/navbar.types';

@Component({
  selector: 'ui-navbar-item',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarItemComponent extends BaseComponent {
  @Input() sizeOrSlot:
    | FlexSizeClass
    | NavbarCenterClass
    | NavbarEndClass
    | NavbarStartClass
    | undefined = 'flex-0';

  @HostBinding('class') override class = this.construct(
    () => [],
    () => [this.sizeOrSlot]
  );
}

@Component({
  selector: 'ui-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent extends BaseComponent {
  @Input() backgroundColor: BackgroundColorClass | undefined = undefined;
  @Input() textColor: TextColorClass | undefined = undefined;
  @Input() container: ContainerClass | undefined = undefined;
  @HostBinding('class') override class = this.construct(
    () => ['navbar'],
    () => [
      this.backgroundColor,
      this.textColor,
      this.container,
    ]
  );
}
