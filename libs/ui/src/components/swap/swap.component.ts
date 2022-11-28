import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Host,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base.component';
import { SwapActiveClass } from '../../types/tailwind.types';

@Component({
  selector: 'ui-swap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './swap.component.html',
  styleUrls: ['./swap.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwapComponent extends BaseComponent implements OnChanges {
  @Input() active: SwapActiveClass | undefined;
  @HostBinding('class') override class = this.construct(
    () => ['swap', 'swap-flip'],
    () => [this.active]
  );

  @Output() activeChange = new EventEmitter<SwapActiveClass | undefined>();

  setActive(isActive: boolean) {
    this.active = isActive ? 'swap-active' : undefined;
    this.activeChange.emit(this.active);
    super.ngOnChanges({});
  }
}

@Component({
  selector: 'ui-swap-off',
  standalone: true,
  imports: [CommonModule],
  template: ` <ng-content></ng-content>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwapOffComponent extends BaseComponent {
  @HostListener('click')
  onClick() {
    this.swapComponent.setActive(true);
  }

  constructor(@Host() private readonly swapComponent: SwapComponent) {
    super();
  }
}

@Component({
  selector: 'ui-swap-on',
  standalone: true,
  imports: [CommonModule],
  template: ` <ng-content></ng-content>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwapOnComponent extends BaseComponent {
  @HostListener('click')
  onClick() {
    this.swapComponent.setActive(false);
  }

  constructor(@Host() private readonly swapComponent: SwapComponent) {
    super();
  }
}
