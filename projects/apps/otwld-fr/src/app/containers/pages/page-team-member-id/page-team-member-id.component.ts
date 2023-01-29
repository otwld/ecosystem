import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeroBreadcrumbsComponent} from '../../sections/hero/hero-heading/hero-breadcrumbs.component';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs';
import {ServicesMenuRouteComponent} from '../page-services/services-menu-route/services-menu-route.component';
import {PortfolioCarouselComponent} from '../../../components/portfolio-carousel/portfolio-carousel.component';
import {HeroClientComponent} from '../../sections/hero/hero-client/hero-client.component';
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
import {HeroClientImageComponent} from '../../sections/hero/hero-client/hero-client-image/hero-client-image.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {DateFnsModule} from 'ngx-date-fns';
import {Dialog} from '@angular/cdk/dialog';
import {faBoxes, faClock, faTasks} from '@fortawesome/free-solid-svg-icons';
import {TranslocoModule} from '@ngneat/transloco';
import {MembersService, SocialIconToFa} from '@ecosystem/shared-models';

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
  faClock = faClock;
  faProject = faBoxes;
  faTasks = faTasks;
  membersService = inject(MembersService)
  member$ = inject(ActivatedRoute).params.pipe(
    switchMap((params) =>
      this.membersService.getMemberBySlug$(params['id'])
    ));
  stringToIcon = SocialIconToFa;

  constructor(
    private readonly dialogService: Dialog
  ) {
  }

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
}
