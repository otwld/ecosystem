import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent, ButtonComponent } from '@otwld/ui';
import { HeroImageComponent } from './hero-image/hero-image.component';

@Component({
  selector: 'otwld-hero',
  standalone: true,
  imports: [CommonModule, ButtonComponent, HeroImageComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent extends BaseComponent {}
