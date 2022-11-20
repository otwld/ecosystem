import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '@otwld/ui';

@Component({
  selector: 'otwld-hero-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-image.component.html',
  styleUrls: ['./hero-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroImageComponent extends BaseComponent {
  @HostBinding('class') override class = this.construct(
    () => [
      'max-h-full',
      'absolute',
      'before:border-4',
      'before:border-primary',
      'after:bg-accent',
      'bottom-0',
      'right-0',
    ],
    () => []
  );
}
