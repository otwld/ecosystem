import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardBodyComponent,
  CardComponent,
  CardImageComponent,
  CardTitleDirective,
  CarouselModule,
  IsInViewportDirective,
} from '@otwld/ui';
import { JoinObjectPipe } from '../../pipes/join/join-object.pipe';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { PortfolioItem } from '../../types/portfolio.types';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { injectTrackEvent } from '@otwld/features';
import { Project } from '@ecosystem/shared-models';

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
    CarouselModule,
  ],
  templateUrl: './portfolio-carousel.component.html',
  styleUrls: ['./portfolio-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioCarouselComponent {
  @Input() items: PortfolioItem[] = [];

  @Input() withApi = false;
  @Input() newItems: Pick<Project, 'services' | 'title' | 'slug' | 'image'>[] =
    [];
  faArrowRight = faArrowRight;
  trackEvent = injectTrackEvent();
}
