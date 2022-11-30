import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  HostBinding,
  Input,
  OnChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base.component';
import { RouterLinkWithHref } from '@angular/router';
import { BorderColorClass } from '../../types/tailwind/utils/border.types';
import { BackgroundColorClass } from '../../types/tailwind/utils/background.types';
import {
  TextColorClass,
  WidthClass,
} from '../../types/tailwind/utils/general.types';
import {
  CardDisplay,
  CardImage,
  CardPadding,
  CardStyle,
} from '../../types/tailwind/components/card.types';

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
  template: ` <figure>
    <a routerLink="{{ routerLink }}" *ngIf="routerLink">
      <img *ngIf="src" src="{{ src }}" alt="{{ alt }}" class="{{ width }}" />
    </a>
    <img *ngIf="src && !routerLink" src="{{ src }}" alt="{{ alt }}" class="{{ width }}" />
  </figure>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardImageComponent {
  @Input() src: string | undefined;
  @Input() alt = '';
  @Input() width: WidthClass | undefined = undefined;
  @Input() routerLink: string | undefined = undefined;
}

@Component({
  selector: 'ui-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.Onush,
})
export class CardComponent
  extends BaseComponent<
    BackgroundColorClass | BorderColorClass | TextColorClass
  >
  implements OnChanges
{
  @Input() backgroundColor: BackgroundColorClass | undefined = 'bg-base-100';
  @Input() textColor: TextColorClass | undefined = 'text-base-content';
  @Input() padding: CardPadding | undefined = undefined;
  @Input() image: CardImage | undefined = undefined;
  @Input() display: CardDisplay | undefined = undefined;
  @Input() cardStyle: CardStyle | undefined = undefined;
  @HostBinding('class') override class = this.construct(
    () => ['card', 'transition-colors', 'duration-300', 'overflow-hidden'],
    () => [
      this.backgroundColor,
      this.textColor,
      this.padding,
      this.image,
      this.display,
      this.cardStyle,
    ]
  );
}
