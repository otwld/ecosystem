import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  HostBinding,
  Input,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import { WidthClass } from '../../types/tailwind/utils/general.types';
import {
  backgroundColor,
  card,
  cardComponent,
  cardDisplay,
  cardImage,
  cardPadding,
  cardStyle,
  overflow,
  TBackgroundColor,
  TCardDisplay,
  TCardImage,
  TCardPadding,
  TCardStyle,
  textColor,
  transitionDuration,
  transitionProperty,
  transitionsAndAnimations,
  TTextColor,
} from '../../types';
import { DumbComponent } from '../../core/components/dumb.component';
import { provideComponentConfiguration } from '../../core';

@Directive({
  selector: '[uiCardImage]',
  standalone: true,
})
export class CardImageDirective {}

@Directive({
  selector: '[uiCardTitle]',
  standalone: true,
})
export class CardTitleDirective {
  @HostBinding('class') hostClasses = 'card-title';
}

@Component({
  selector: 'ui-card-body',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-content select="ui-card-title"></ng-content>
    <ng-content></ng-content>
    <ng-content select="ui-card-actions"></ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardBodyComponent {
  @HostBinding('class') hostClasses = 'card-body';
}

@Component({
  selector: 'ui-card-actions',
  standalone: true,
  imports: [CommonModule],
  template: ` <ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardActionsComponent {
  @HostBinding('class') hostClasses = 'card-actions';
}

@Component({
  selector: 'ui-card-image',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  template: `
    <figure *ngIf="!mode; else imgTemplate">
      <a *ngIf="routerLink; else imgTemplate" routerLink="{{ routerLink }}">
        <ng-container *ngTemplateOutlet="imgTemplate"></ng-container>
      </a>
    </figure>

    <ng-template #imgTemplate>
      <img
        src="{{ src }}"
        alt="{{ alt }}"
        class="{{ width }} {{
          mode === 'cover' ? 'object-cover w-full h-full' : ''
        }}"
      />
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardImageComponent {
  @Input() src: string | undefined;
  @Input() mode: 'cover' | undefined;
  @Input() alt = '';
  @Input() width: WidthClass | undefined = undefined;
  @Input() routerLink: string | undefined = undefined;
}

@Component({
  selector: 'ui-card',
  standalone: true,
  imports: [CommonModule],
  providers: [
    provideComponentConfiguration({
      name: 'dumb-card',
      type: 'dumb',
    })
  ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent extends DumbComponent {
  @Input() backgroundColor: TBackgroundColor | undefined = 'bg-base-100';
  @Input() textColor: TTextColor | undefined = 'text-base-content';
  @Input() padding: TCardPadding | undefined = undefined;
  @Input() image: TCardImage | undefined = undefined;
  @Input() display: TCardDisplay | undefined = undefined;
  @Input() cardStyle: TCardStyle | undefined = undefined;
  @HostBinding('class') override classes = this.getComponentClasses(() => [
    card(
      cardComponent('card'),
      cardPadding(this.padding),
      cardImage(this.image),
      cardDisplay(this.display),
      cardStyle(this.cardStyle)
    ),
    backgroundColor(this.backgroundColor),
    transitionsAndAnimations(
      transitionProperty('transition-colors'),
      transitionDuration('duration-300')
    ),
    overflow('overflow-hidden'),
    textColor(this.textColor),
  ]);
}

@NgModule({
  imports: [
    CardComponent,
    CardImageComponent,
    CardBodyComponent,
    CardActionsComponent,
  ],
  exports: [
    CardComponent,
    CardImageComponent,
    CardBodyComponent,
    CardActionsComponent,
  ],
})
export class CardModule {}
