import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
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
  @Input() image: string | undefined;
  @Input() decorated = true;

  @HostBinding('class') override class = this.construct(
    () => [
      'max-h-full',
      'absolute',
      'after:bg-accent',
      'bottom-0',
    ],
    () => [
      this.decorated ? 'before:border-4' : undefined,
      this.decorated ? 'before:border-primary' : undefined,
    ]
  );
}
