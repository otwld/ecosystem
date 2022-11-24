import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroBreadcrumbsComponent } from '../../sections/hero/hero-heading/hero-breadcrumbs.component';
import { TeamMemberService } from '../../../services/team-member/teams.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ServicesMenuRouteComponent } from '../page-services/services-menu-route/services-menu-route.component';
import { PortfolioCarouselComponent } from '../../../components/portfolio-carousel/portfolio-carousel.component';
import { HeroClientComponent } from '../../sections/hero/hero-client/hero-client.component';
import { ButtonComponent, HeroComponent, HeroContentComponent, RadialProgressComponent } from '@otwld/ui';
import {
  HeroClientImageComponent
} from '../../sections/hero/hero-client/hero-client-image/hero-client-image.component';

@Component({
  selector: 'otwld-page-team-member-id',
  standalone: true,
  imports: [
    CommonModule,
    HeroBreadcrumbsComponent,
    ServicesMenuRouteComponent,
    PortfolioCarouselComponent,
    HeroClientComponent,
    RadialProgressComponent,
    HeroComponent,
    HeroContentComponent,
    ButtonComponent,
    HeroClientImageComponent,
  ],
  templateUrl: './page-team-member-id.component.html',
  styleUrls: ['./page-team-member-id.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageTeamMemberIdComponent {
  currentMember$ = this.activatedRoute.params.pipe(
    map((params) =>
      this.teamMemberService.members.find((member) =>
        member.route.includes(params['id'])
      )
    )
  );

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly teamMemberService: TeamMemberService
  ) {}
}
