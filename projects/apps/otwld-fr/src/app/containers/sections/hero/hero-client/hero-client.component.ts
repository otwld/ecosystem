import { ChangeDetectionStrategy, Component } from '@angular/core';
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
export class HeroClientComponent extends BaseComponent {}
