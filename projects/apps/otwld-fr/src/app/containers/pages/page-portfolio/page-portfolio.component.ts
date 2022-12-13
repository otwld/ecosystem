import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroBreadcrumbsComponent } from '../../sections/hero/hero-heading/hero-breadcrumbs.component';
import {
  catchError,
  combineLatest,
  filter,
  map,
  of,
  shareReplay,
  switchMap,
  tap,
} from 'rxjs';
import {
  ActivatedRoute,
  RouterLink,
  RouterLinkWithHref,
} from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { PortfolioService } from '../../../services/portfolio/portfolio.service';
import { PortfolioItem } from '../../../types/portfolio.types';
import {
  AvatarModule,
  ButtonComponent,
  CardBodyComponent,
  CardComponent,
  CardImageComponent,
} from '@otwld/ui';
import { JoinObjectPipe } from '../../../pipes/join/join-object.pipe';
import {
  faAngleDoubleRight,
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { PortfolioComponent } from '../../sections/portfolio/portfolio.component';
import { PortfolioCarouselComponent } from '../../../components/portfolio-carousel/portfolio-carousel.component';
import { NavbarDefaultComponent } from '../../../components/navbar/navbar-default.component';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { BreadcrumbsService } from '../../../services/breadcrumbs/breadcrumbs.service';
import { FormatPipeModule } from 'ngx-date-fns';
import { maximize } from '@otwld/features';

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
    AvatarModule,
    RouterLink,
    FormatPipeModule,
    CardImageComponent,
  ],
  templateUrl: './page-portfolio.component.html',
  styleUrls: ['./page-portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PagePortfolioComponent {
  private onLangChange$ = inject(TranslocoService).langChanges$;
  currentPortfolioItem$ = this.activatedRoute.params.pipe(
    map((params) => this.portfolioService.getOneByRoute(params['id'])),
    shareReplay({ bufferSize: 1, refCount: true }),
    tap((portfolioItem) => {
      if (portfolioItem) {
        this.breadcrumbsService.addBreadcrumb({
          labelTranslationKey: portfolioItem.title,
          url: portfolioItem.route,
        });
      }
    })
  );

  loadContent$ = combineLatest([
    this.onLangChange$,
    this.currentPortfolioItem$,
  ]).pipe(
    filter(([, service]) => !!service),
    switchMap(([lang, service]) =>
      this.httpClient
        .get(
          lang === 'en'
            ? (service as PortfolioItem).templates.en
            : (service as PortfolioItem).templates.fr,
          {
            responseType: 'text',
          }
        )
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

  relatedProjects$ = this.currentPortfolioItem$.pipe(
    filter((service) => !!service),
    map((item) => item?.relatedProjects || [])
  );
  faAngleDoubleRight = faAngleDoubleRight;
  openTawkTo = maximize;

  constructor(
    private readonly portfolioService: PortfolioService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly httpClient: HttpClient,
    private readonly domSanitizer: DomSanitizer,
    private readonly breadcrumbsService: BreadcrumbsService
  ) {}

}
