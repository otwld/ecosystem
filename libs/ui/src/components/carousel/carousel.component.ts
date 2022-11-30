import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Host,
  HostBinding,
  Input,
  NgModule,
  QueryList,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base.component';
import {
  ButtonColorClass,
  ButtonSizeClass,
  CarouselModeClass,
  CarouselSnapPositionClass,
  HeightClass,
  RoundedClass,
  WidthClass,
} from '../../types';
import { ButtonComponent } from '../button/button.component';

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

@Component({
  selector: 'ui-carousel-indicators',
  template: `
    <a
      *ngFor="let item of indicators; let index = index"
      (click)="scrollTo(item)"
    >
      <ui-button [color]="btnColor" [btnSize]="btnSize">{{
        index + 1
      }}</ui-button>
    </a>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselIndicatorsComponent
  extends BaseComponent
  implements AfterViewInit
{
  @HostBinding('class') override class = this.construct(() => [
    'flex',
    'w-full',
    'justify-center',
    'gap-2',
    'py-2',
  ]);
  @Input() btnSize: ButtonSizeClass = 'btn-xs';
  @Input() btnColor: ButtonColorClass | undefined;
  @Input() carousel: CarouselComponent | undefined = undefined;
  indicators: CarouselItemComponent[] = [];

  ngAfterViewInit(): void {
    if (this.carousel && this.carousel.itemsRef) {
      this.carousel.itemsRef.forEach((item) => {
        this.indicators.push(item);
      });
      this.cdr.markForCheck();
    }
  }

  scrollTo(item: CarouselItemComponent): void {
    item.elementRef.nativeElement.scrollIntoView({
      block: 'center',
      inline: 'center',
    });
  }
}

@Component({
  selector: 'ui-carousel',
  template: ` <ng-content select="ui-carousel-item"></ng-content> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent extends BaseComponent {
  @Input() snapPosition: CarouselSnapPositionClass | undefined = undefined;
  @Input() mode: CarouselModeClass | undefined = undefined;
  @Input() rounded: RoundedClass | undefined = undefined;
  @Input() enableArrows = false;
  @ContentChildren(CarouselItemComponent) itemsRef:
    | QueryList<CarouselItemComponent>
    | undefined = undefined;
  @HostBinding('class') override class = this.construct(
    () => ['carousel'],
    () => [this.snapPosition, this.rounded, this.mode]
  );

  previous(item: CarouselItemComponent) {
    if (this.itemsRef) {
      const index = this.itemsRef.toArray().indexOf(item);
      const previousItem = this.itemsRef.get(index - 1);
      if (previousItem) {
        previousItem.elementRef.nativeElement.scrollIntoView({
          block: 'center',
          inline: 'center',
        });
      } else {
        const lastItem = this.itemsRef.last;
        if (lastItem) {
          lastItem.elementRef.nativeElement.scrollIntoView({
            block: 'center',
            inline: 'center',
          });
        }
      }
    }
  }

  next(item: CarouselItemComponent) {
    if (this.itemsRef) {
      const index = this.itemsRef.toArray().indexOf(item);
      const nextItem = this.itemsRef.get(index + 1);
      if (nextItem) {
        nextItem.elementRef.nativeElement.scrollIntoView({
          block: 'center',
          inline: 'center',
        });
      } else {
        const firstItem = this.itemsRef.first;
        if (firstItem) {
          firstItem.elementRef.nativeElement.scrollIntoView({
            block: 'center',
            inline: 'center',
          });
        }
      }
    }
  }
}

@NgModule({
  declarations: [
    CarouselComponent,
    CarouselItemComponent,
    CarouselIndicatorsComponent,
  ],
  imports: [CommonModule, ButtonComponent],
  exports: [
    CarouselComponent,
    CarouselItemComponent,
    CarouselIndicatorsComponent,
  ],
})
export class CarouselModule {}
