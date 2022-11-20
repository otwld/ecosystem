import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardBodyComponent,
  CardComponent,
  CardImageComponent,
  CardTitleDirective,
  IsInViewportDirective,
} from '@otwld/ui';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'otwld-portfolio',
  standalone: true,
  imports: [
    CommonModule,
    IsInViewportDirective,
    CardComponent,
    CardImageComponent,
    CardTitleDirective,
    CardBodyComponent,
    FontAwesomeModule,
  ],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioComponent {
  faArrowRight = faArrowRight;
}
