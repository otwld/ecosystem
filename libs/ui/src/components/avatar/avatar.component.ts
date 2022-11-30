import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  NgModule,
} from '@angular/core';
import { BaseComponent } from '../base.component';
import {
  AvatarIndicatorClass,
  AvatarPlaceholderClass,
  BackgroundColorClass,
  MaskTypeClass,
  RingColorClass,
  RingOffsetColorClass,
  RingOffsetWidthClass,
  RingWidthClass,
  RoundedClass,
  SpaceClass,
  TextColorClass,
  WidthClass,
} from '../../types';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'ui-avatar-group',
  template: ` <ng-content select="ui-avatar"></ng-content> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarGroupComponent extends BaseComponent {
  @Input() space: SpaceClass = '-space-x-8';
  @HostBinding('class') override class = this.construct(
    () => ['avatar-group'],
    () => [this.space]
  );
}

@Component({
  selector: 'ui-avatar',
  template: `
    <div
      [ngClass]="{ mask: !!maskType, ring: !!ringColor }"
      class="{{ width }} {{ rounded }} {{ maskType }} {{ backgroundColor }} {{
        textColor
      }} {{ ringColor }} {{ ringOffsetColor }} {{ ringOffsetWidth }} {{
        ringWidth
      }}"
    >
      <ng-content></ng-content>
      <img *ngIf="imgSrc" [src]="imgSrc" [attr.alt]="imgAlt ?? null" />
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent extends BaseComponent {
  @Input() backgroundColor: BackgroundColorClass | undefined = 'bg-base-300';
  @Input() imgSrc: string | undefined = undefined;
  @Input() imgAlt: string | undefined = undefined;
  @Input() width: WidthClass | undefined = undefined;
  @Input() rounded: RoundedClass | undefined = undefined;
  @Input() placeholder: AvatarPlaceholderClass | undefined = undefined;
  @Input() ringColor: RingColorClass | undefined = undefined;
  @Input() ringWidth: RingWidthClass | undefined = undefined;
  @Input() ringOffsetColor: RingOffsetColorClass | undefined =
    'ring-offset-base-100';
  @Input() ringOffsetWidth: RingOffsetWidthClass | undefined = 'ring-offset-2';
  @Input() maskType: MaskTypeClass | undefined = undefined;
  @Input() textColor: TextColorClass | undefined = undefined;
  @Input() indicator: AvatarIndicatorClass | undefined = undefined;
  @HostBinding('class') override class = this.construct(
    () => ['avatar'],
    () => [this.placeholder, this.indicator]
  );
}

@NgModule({
  declarations: [AvatarComponent, AvatarGroupComponent],
  exports: [AvatarComponent, AvatarGroupComponent],
  imports: [NgClass, NgIf],
})
export class AvatarModule {}
