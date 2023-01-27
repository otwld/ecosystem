import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeroBreadcrumbsComponent} from '../../sections/hero/hero-heading/hero-breadcrumbs.component';
import {shareReplay, switchMap, tap,} from 'rxjs';
import {ActivatedRoute, RouterLink, RouterLinkWithHref,} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AvatarModule, ButtonComponent, CardBodyComponent, CardComponent, CardImageComponent,} from '@otwld/ui';
import {JoinObjectPipe} from '../../../pipes/join/join-object.pipe';
import {faAngleDoubleRight, faArrowLeft, faArrowRight,} from '@fortawesome/free-solid-svg-icons';
import {PortfolioComponent} from '../../sections/portfolio/portfolio.component';
import {PortfolioCarouselComponent} from '../../../components/portfolio-carousel/portfolio-carousel.component';
import {NavbarDefaultComponent} from '../../../components/navbar/navbar-default.component';
import {TranslocoModule, TranslocoService} from '@ngneat/transloco';
import {BreadcrumbsService} from '../../../services/breadcrumbs/breadcrumbs.service';
import {FormatPipeModule} from 'ngx-date-fns';
import {TawkToService} from '@otwld/features';
import {ProjectsService} from '@ecosystem/shared-models';

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
  currentPortfolioItem$ = this.activatedRoute.params.pipe(
    switchMap((params) => this.projectsService.getProjectBySlug$(params['id'])),
    shareReplay({bufferSize: 1, refCount: true}),
    tap((portfolioItem) => {
      if (portfolioItem) {
        this.breadcrumbsService.addBreadcrumb({
          labelTranslationKey: portfolioItem.title,
          url: `portfolio/${portfolioItem.slug}`,
        });
      }
    })
  );
  relatedProjects$ = this.activatedRoute.params.pipe(
    switchMap((params) => this.projectsService.getRelatedProjectsBySlug$(params['id'])),
    shareReplay({bufferSize: 1, refCount: true}),
  );
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  faAngleDoubleRight = faAngleDoubleRight;
  tawkTo = inject(TawkToService);
  private onLangChange$ = inject(TranslocoService).langChanges$;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly breadcrumbsService: BreadcrumbsService,
    private readonly projectsService: ProjectsService,
  ) {
  }
}
