import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardBodyComponent,
  CardComponent, CardImageComponent,
  CardTitleDirective,
  IsInViewportDirective
} from '@otwld/ui';
import { JoinObjectPipe } from '../../pipes/join/join-object.pipe';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { PortfolioItem } from '../../types/portfolio.types';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'otwld-portfolio-carousel',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    IsInViewportDirective,
    CardTitleDirective,
    CardBodyComponent,
    CardImageComponent,
    RouterModule,
    JoinObjectPipe,
    FontAwesomeModule,
  ],
  templateUrl: './portfolio-carousel.component.html',
  styleUrls: ['./portfolio-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioCarouselComponent {
  @Input() items: PortfolioItem[] = [];

  faArrowRight = faArrowRight;
}
