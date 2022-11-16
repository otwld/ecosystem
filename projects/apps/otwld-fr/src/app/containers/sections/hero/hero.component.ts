import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonFillComponent } from '@otwld/ui';
import { BaseComponent } from '@otwld/ui';

@Component({
  selector: 'otwld-hero',
  standalone: true,
  imports: [CommonModule, ButtonFillComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent extends BaseComponent {}
