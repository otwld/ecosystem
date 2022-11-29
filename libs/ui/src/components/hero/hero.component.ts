import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base.component';
import {
  BackgroundColorClass,
  BackgroundOpacityClass,
  BackgroundURLClass
} from '../../types/tailwind/utils/background.types';

@Component({
  selector: 'ui-hero-content',
  standalone: true,
  imports: [CommonModule],
  template: ` <ng-content></ng-content> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroContentComponent extends BaseComponent {
  @HostBinding('class') hostClasses = this.construct(
    () => ['hero-content'],
    () => []
  );
}

@Component({
  selector: 'ui-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HeroComponent extends BaseComponent {
  @HostBinding('style.background-image')
  @Input()
  background: BackgroundURLClass | BackgroundColorClass | undefined = undefined;

  @Input() overlay: boolean | undefined = undefined;
  @Input() overlayOpacity: BackgroundOpacityClass | undefined = 'bg-opacity-60';

  @HostBinding('class') override class = this.construct(
    () => ['hero', 'relative'],
    () => [this.background]
  );
}
