import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardBodyComponent,
  CardComponent,
  CardImageComponent,
  CardTitleDirective,
  ContainerComponent,
  IsInViewportDirective,
  provideComponentConfiguration,
} from '@otwld/ui';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLinkWithHref } from '@angular/router';
import { JoinObjectPipe } from '../../../pipes/join/join-object.pipe';
import { PortfolioCarouselComponent } from '../../../components/portfolio-carousel/portfolio-carousel.component';
import { TranslocoModule } from '@ngneat/transloco';
import { ProjectsService } from '@ecosystem/shared-models';

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
  providers: [
    provideComponentConfiguration({
      name: 'container-portfolio',
      type: 'container',
    }),
  ],
})
export class PortfolioComponent extends ContainerComponent {
  private readonly _projectsService = inject(ProjectsService);
  portfolio$ = this.createTransferStateOperation('getPaginatedProjects', this._projectsService.getPaginatedProjects$());
}
