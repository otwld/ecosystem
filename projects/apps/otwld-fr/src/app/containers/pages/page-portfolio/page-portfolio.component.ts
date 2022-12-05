import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroBreadcrumbsComponent } from '../../sections/hero/hero-heading/hero-breadcrumbs.component';
import { catchError, filter, map, of, switchMap } from 'rxjs';
import { ActivatedRoute, RouterLinkWithHref } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { PortfolioService } from '../../../services/portfolio/portfolio.service';
import { PortfolioItem } from '../../../types/portfolio.types';
import { ButtonComponent, CardBodyComponent, CardComponent } from '@otwld/ui';
import { JoinObjectPipe } from '../../../pipes/join/join-object.pipe';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { PortfolioComponent } from '../../sections/portfolio/portfolio.component';
import { PortfolioCarouselComponent } from '../../../components/portfolio-carousel/portfolio-carousel.component';
import { NavbarDefaultComponent } from '../../../components/navbar/navbar-default.component';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'otwld-page-portfolio',
  standalone: true,
  imports: [
    CommonModule,
    NavbarDefaultComponent,
    HeroBreadcrumbsComponent,
    HttpClientModule,
    CardComponent,
    CardBodyComponent,
    JoinObjectPipe,
    ButtonComponent,
    PortfolioComponent,
    PortfolioCarouselComponent,
    RouterLinkWithHref,
    TranslocoModule,
  ],
  templateUrl: './page-portfolio.component.html',
  styleUrls: ['./page-portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PagePortfolioComponent {
  currentPortfolioItem$ = this.activatedRoute.params.pipe(
    map((params) =>
      this.portfolioService.portfolio.find((service) =>
        service.route.includes(params['id'])
      )
    )
  );

  loadContent$ = this.currentPortfolioItem$.pipe(
    filter((service) => !!service),
    switchMap((service) =>
      this.httpClient
        .get((service as PortfolioItem).templateURL, {
          responseType: 'text',
        })
        .pipe(
          catchError(() =>
            of(
              '<span class="text-error">PortfolioItem or TemplatePortfolioItem not found</span>'
            )
          )
        )
    ),
    map((content) => this.domSanitizer.bypassSecurityTrustHtml(content))
  );
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;

  fakeRelatedProjects = this.portfolioService.portfolio;

  constructor(
    private readonly portfolioService: PortfolioService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly httpClient: HttpClient,
    private readonly domSanitizer: DomSanitizer
  ) {}
}
