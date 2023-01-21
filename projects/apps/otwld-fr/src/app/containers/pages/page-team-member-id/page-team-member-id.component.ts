import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroBreadcrumbsComponent } from '../../sections/hero/hero-heading/hero-breadcrumbs.component';
import { TeamMemberService } from '../../../services/team-member/teams.service';
import { ActivatedRoute } from '@angular/router';
import { map, shareReplay, switchMap, tap } from 'rxjs';
import { ServicesMenuRouteComponent } from '../page-services/services-menu-route/services-menu-route.component';
import { PortfolioCarouselComponent } from '../../../components/portfolio-carousel/portfolio-carousel.component';
import { HeroClientComponent } from '../../sections/hero/hero-client/hero-client.component';
import {
  AvatarModule,
  BadgeComponent,
  ButtonComponent,
  CardIconComponent,
  CardModule,
  CarouselModule,
  HeroComponent,
  HeroContentComponent,
  MenuDirective,
  MenuItemDirective,
  ModalConfig,
  ModalRootComponent,
  ModalTestComponent,
  ModalTitleDescriptionComponent,
  RadialProgressComponent,
  TabsModule,
  TwitterModule,
} from '@otwld/ui';
import { HeroClientImageComponent } from '../../sections/hero/hero-client/hero-client-image/hero-client-image.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DateFnsModule } from 'ngx-date-fns';
import { Dialog } from '@angular/cdk/dialog';
import { faBoxes, faClock, faTasks } from '@fortawesome/free-solid-svg-icons';
import { TranslocoModule } from '@ngneat/transloco';
import { PortfolioService } from '../../../services/portfolio/portfolio.service';
import { TeamMember } from '../../../types/team-member.types';
import {GetMemberBySlugGQL} from '@ecosystem/shared-models';
import {SocialIconToFa} from '../../../../../../../../libs/shared-models/src/lib/utils/icon.utils';

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
    CarouselModule,
    CardIconComponent,
    AvatarModule,
    TranslocoModule,
    TabsModule,
    TwitterModule,
    CardModule,
  ],
  templateUrl: './page-team-member-id.component.html',
  styleUrls: ['./page-team-member-id.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageTeamMemberIdComponent {
  currentMember$ = this.activatedRoute.params.pipe(
    switchMap((params) =>
      this.teamMemberService.getOneByRoute(params['id']).pipe(
        tap((member) => {
          if (!member) {
            throw new Error('Member not found');
          }
        })
      )
    ),
    map((member) => member as TeamMember),
    shareReplay({ bufferSize: 1, refCount: true })
  );
  newMember$ = inject(ActivatedRoute).params.pipe(
    switchMap((params) =>
      this.getMemberBySlug.fetch({slug: params['id']})
  ), map((member) => member.data.getMemberBySlug));

  portfolio$ = this.currentMember$.pipe(
    switchMap((member) =>
      this.portfolioService.findByMemberFirstName(member.firstName)
    )
  );
  faClock = faClock;
  faProject = faBoxes;
  faTasks = faTasks;

  getMemberBySlug = inject(GetMemberBySlugGQL);

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly teamMemberService: TeamMemberService,
    private readonly portfolioService: PortfolioService,
    private readonly dialogService: Dialog
  ) {}

  openDialog() {
    this.dialogService.open(ModalRootComponent, {
      data: {
        portalContent: ModalTitleDescriptionComponent,
        portalData: {
          title: 'Congratulations random Internet user!',
          description: 'World',
        },
      },
    });
  }

  openTest() {
    this.dialogService.open(ModalRootComponent, {
      data: {
        portalContent: ModalTestComponent,
        portalData: {},
        modalPosition: ['modal-bottom', 'sm:modal-middle'],
      } as ModalConfig<ModalTestComponent>,
    });
  }

  stringToIcon = SocialIconToFa;
}
