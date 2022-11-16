import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgComponent, IsInViewportDirective } from '@otwld/ui';

@Component({
  selector: 'otwld-portfolio',
  standalone: true,
  imports: [CommonModule, ImgComponent, IsInViewportDirective],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioComponent {}
