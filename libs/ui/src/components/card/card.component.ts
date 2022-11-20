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
import {
  BackgroundColorClass,
  BorderColorClass,
  CardDisplay,
  CardImage,
  CardPadding,
  CardStyle,
  TextColorClass,
} from '../../types/tailwind.types';

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
  imports: [CommonModule],
  template: ` <figure>
    <img *ngIf="src" src="{{ src }}" alt="{{ alt }}" />
  </figure>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardImageComponent {
  @Input() src: string | undefined;
  @Input() alt = '';
}

@Component({
  selector: 'ui-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent
  extends BaseComponent<
    BackgroundColorClass | BorderColorClass | TextColorClass
  >
  implements OnChanges
{
  @Input() backgroundColor: BackgroundColorClass = 'bg-base-100';
  @Input() textColor: TextColorClass = 'text-base-content';
  @Input() padding: CardPadding = 'card-normal';
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
