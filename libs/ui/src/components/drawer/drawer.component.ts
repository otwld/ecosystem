import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component, EventEmitter,
  Host,
  HostBinding,
  HostListener, Input, Output
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'ui-drawer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drawer.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerComponent extends BaseComponent {
  get open(): boolean {
    return this._open;
  }

  @Input()
  set open(value: boolean) {
    if (this._open && !value) {
      this.closed.emit();
    }
    this._open = value;
  }
  @Output() closed = new EventEmitter();
  private _open = false;
  @HostBinding('class') override class = this.construct(
    () => ['drawer'],
    () => []
  );
}

@Component({
  selector: 'ui-drawer-content',
  standalone: true,
  imports: [CommonModule],
  template: ` <ng-content></ng-content>`,
  styles: [],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerContentComponent extends BaseComponent {
  @HostBinding('class') override class = this.construct(
    () => ['drawer-content'],
    () => []
  );
  @HostListener('click')
  onClick() {
    // this.swapComponent.setActive(false);
  }

  constructor(@Host() private readonly drawerComponent: DrawerComponent) {
    super();
  }
}

@Component({
  selector: 'ui-drawer-side',
  standalone: true,
  imports: [CommonModule],
  template: `
    <label class="drawer-overlay" (click)="close()"></label>
    <ng-content></ng-content>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerSideComponent extends BaseComponent {
  @HostBinding('class') override class = this.construct(
    () => ['drawer-side'],
    () => []
  );
  constructor(
    @Host() private readonly drawerComponent: DrawerComponent,
  ) {
    super();
  }

  close() {
    this.drawerComponent.open = false;
    this.drawerComponent.cdr.markForCheck();
  }
}
