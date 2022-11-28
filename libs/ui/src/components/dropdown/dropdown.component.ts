import {
  ChangeDetectionStrategy,
  Component,
  Host,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base.component';
import {
  DropdownPositionClass,
  DropdownStateClass,
} from '../../types/tailwind.types';

@Component({
  selector: 'ui-dropdown-content',
  standalone: true,
  imports: [CommonModule],
  template: ` <ng-content></ng-content>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownContentComponent extends BaseComponent {
  @HostBinding('class') override class = this.construct(
    () => ['dropdown-content'],
    () => []
  );

  @HostBinding('tabindex') tabindex = 0;
}
@Component({
  selector: 'ui-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent extends BaseComponent {
  @Input() state: DropdownStateClass | undefined = undefined;
  @Input() position: DropdownPositionClass | undefined = undefined;
  @HostBinding('class') override class = this.construct(
    () => ['dropdown'],
    () => [this.state, this.position]
  );
}
@Component({
  selector: 'ui-dropdown-trigger',
  standalone: true,
  imports: [CommonModule],
  template: ` <ng-content></ng-content>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownTriggerComponent extends BaseComponent {
  @HostBinding('tabindex') tabindex = 0;
  @HostListener('click')
  onClick() {
    this.dropdownComponent.state = 'dropdown-open';
  }
  constructor(@Host() private readonly dropdownComponent: DropdownComponent) {
    super();
  }
}
