import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '@otwld/ui';

@Component({
  selector: 'otwld-hero-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-client-image.component.html',
  styleUrls: ['./hero-client-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroClientImageComponent extends BaseComponent {
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
