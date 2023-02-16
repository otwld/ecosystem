import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroBreadcrumbsComponent } from '../../sections/hero/hero-heading/hero-breadcrumbs.component';
import { tap } from 'rxjs';
import { RouterLink, RouterLinkWithHref } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {
  AvatarModule,
  ButtonComponent,
  CardBodyComponent,
  CardComponent,
  CardImageComponent,
  PageComponent,
  provideComponentConfiguration,
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
import { TranslocoModule } from '@ngneat/transloco';
import { FormatPipeModule } from 'ngx-date-fns';
import { TawkToService } from '@otwld/features';
import { ProjectsService } from '@ecosystem/shared-models';

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
  providers: [
    provideComponentConfiguration({
      name: 'page-portfolio',
      type: 'page',
    }),
  ],
  templateUrl: './page-portfolio.component.html',
  styleUrls: ['./page-portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PagePortfolioComponent extends PageComponent {

  icons = {
    faArrowLeft: faArrowLeft,
    faArrowRight: faArrowRight,
    faAngleDoubleRight: faAngleDoubleRight,
  };
  private readonly _projectsService = inject(ProjectsService);
  currentPortfolioItem$ = this.getParams$.pipe(
    this.runTransferStateOperation(
      ({ slug }) => `getProjectBySlug-${slug}`,
      ({ slug }) => this._projectsService.getProjectBySlug$(slug)
    ),
    tap((project) => this.setBreadcrumb(project.title, project.slug))
  );
  relatedProjects$ = this.getParams$.pipe(
    this.runTransferStateOperation(
      ({ slug }) => `getRelatedProjects-${slug}`,
      ({ slug }) => this._projectsService.getRelatedProjectsBySlug$(slug)
    )
  );
  tawkTo = inject(TawkToService);
}
