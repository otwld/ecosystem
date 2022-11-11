import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'otwld-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioComponent {
}
