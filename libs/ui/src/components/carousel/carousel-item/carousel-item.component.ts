import {
  ChangeDetectionStrategy,
  Component,
  Host,
  HostBinding,
  Input,
} from '@angular/core';
import { BaseComponent } from '../../base.component';
import { HeightClass, WidthClass } from '../../../types';
import { CarouselComponent } from '../carousel.component';

@Component({
  selector: 'ui-carousel-item',
  template: `
    <ng-content></ng-content>
    <img
      [ngClass]="{
        'w-full': !!width
      }"
      *ngIf="imgSrc"
      [src]="imgSrc"
      [attr.alt]="imgAlt ?? null"
    />
    <div
      *ngIf="carousel.enableArrows"
      class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
    >
      <a (click)="previous()">
        <ui-button shape="btn-circle">❮</ui-button>
      </a>
      <a (click)="next()">
        <ui-button shape="btn-circle">❯</ui-button>
      </a>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselItemComponent extends BaseComponent {
  @Input() width: WidthClass | undefined = undefined;
  @Input() height: HeightClass | undefined = undefined;
  @HostBinding('class') override class = this.construct(
    () => ['carousel-item', 'relative'],
    () => [this.width, this.height]
  );
  @Input() imgSrc: string | undefined = undefined;
  @Input() imgAlt: string | undefined = undefined;

  constructor(@Host() public carousel: CarouselComponent) {
    super();
  }

  previous() {
    this.carousel.previous(this);
  }

  next() {
    this.carousel.next(this);
  }
}
