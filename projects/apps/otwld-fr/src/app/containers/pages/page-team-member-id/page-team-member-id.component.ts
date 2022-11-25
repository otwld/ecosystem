import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroBreadcrumbsComponent } from '../../sections/hero/hero-heading/hero-breadcrumbs.component';
import { TeamMemberService } from '../../../services/team-member/teams.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ServicesMenuRouteComponent } from '../page-services/services-menu-route/services-menu-route.component';
import { PortfolioCarouselComponent } from '../../../components/portfolio-carousel/portfolio-carousel.component';
import { HeroClientComponent } from '../../sections/hero/hero-client/hero-client.component';
import {
  BadgeComponent,
  ButtonComponent,
  HeroComponent,
  HeroContentComponent,
  MenuDirective,
  MenuItemDirective,
  ModalComponent, ModalConfig,
  ModalRootComponent,
  ModalTestComponent,
  ModalTitleDescriptionComponent,
  RadialProgressComponent, twInline
} from '@otwld/ui';
import {
  HeroClientImageComponent
} from '../../sections/hero/hero-client/hero-client-image/hero-client-image.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DateFnsModule } from 'ngx-date-fns';
import { Dialog } from '@angular/cdk/dialog';

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
    MenuDirective,
    MenuItemDirective,
    FontAwesomeModule,
    DateFnsModule,
    BadgeComponent,
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
    private readonly teamMemberService: TeamMemberService,
    private readonly dialogService: Dialog,
  ) {}

  openDialog() {
    const dialogRef = this.dialogService.open(ModalRootComponent, {
      data: {
        portalContent: ModalTitleDescriptionComponent,
        portalData: {
          title: 'Congratulations random Internet user!',
          description: 'World',
        }
      }
    });
  }

  openTest() {
    this.dialogService.open(ModalRootComponent, {
      data: {
        portalContent: ModalTestComponent,
        portalData: {},
        modalPosition: ['modal-bottom', 'sm:modal-middle'],
      } as ModalConfig<ModalTestComponent>
    });
  }
}
