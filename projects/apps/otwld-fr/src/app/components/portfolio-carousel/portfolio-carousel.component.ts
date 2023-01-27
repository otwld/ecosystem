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
import { TranslocoModule } from '@ngneat/transloco';
import { injectTrackEvent } from '@otwld/features';
import {Project, Service} from '@ecosystem/shared-models';

type MinimalService = {services: Array<Pick<Service, 'title'>>}
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
    TranslocoModule,
  ],
  templateUrl: './portfolio-carousel.component.html',
  styleUrls: ['./portfolio-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioCarouselComponent {

  @Input() items: Array<(Pick<Project, 'title' | 'slug' | 'image'> & MinimalService)> = [];
  faArrowRight = faArrowRight;
  trackEvent = injectTrackEvent();
}
