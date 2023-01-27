import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  CardBodyComponent,
  CardComponent,
  CardImageComponent,
  CardTitleDirective,
  IsInViewportDirective,
} from '@otwld/ui';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {PortfolioService} from '../../../services/portfolio/portfolio.service';
import {RouterLinkWithHref} from '@angular/router';
import {JoinObjectPipe} from '../../../pipes/join/join-object.pipe';
import {PortfolioCarouselComponent} from '../../../components/portfolio-carousel/portfolio-carousel.component';
import {TranslocoModule} from '@ngneat/transloco';
import {ProjectsService} from '@ecosystem/shared-models';

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
    RouterLinkWithHref,
    JoinObjectPipe,
    PortfolioCarouselComponent,
    TranslocoModule,
  ],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioComponent {
  faArrowRight = faArrowRight;
  portfolio$ = inject(ProjectsService).getPaginatedProjects$();

  constructor(private readonly portfolioService: PortfolioService) {
  }
}
