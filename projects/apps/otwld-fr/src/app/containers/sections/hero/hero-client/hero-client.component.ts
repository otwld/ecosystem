import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent, ButtonComponent } from '@otwld/ui';
import { HeroClientImageComponent } from './hero-client-image/hero-client-image.component';

@Component({
  selector: 'otwld-hero-client',
  standalone: true,
  imports: [CommonModule, ButtonComponent, HeroClientImageComponent],
  templateUrl: './hero-client.component.html',
  styleUrls: ['./hero-client.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroClientComponent extends BaseComponent {
  @Input() subtitle: string | undefined;
  @Input() title: string | undefined;
  @Input() image: string | undefined;
  @Input() ctaText: string | undefined;
  @Input() ctaLink: string | undefined;
  @Input() decorated = true;

  @Output() ctaClicked = new EventEmitter<void>();
}
