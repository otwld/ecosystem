import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroBreadcrumbsComponent } from '../../sections/hero/hero-heading/hero-breadcrumbs.component';
import { take, tap } from 'rxjs';
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
  PageComponent,
  provideComponentConfiguration,
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
import { MembersService, SocialIconToFa } from '@ecosystem/shared-models';

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
  providers: [
    provideComponentConfiguration({
      name: 'page-team-member-id',
      type: 'page',
    }),
  ],
})
export class PageTeamMemberIdComponent extends PageComponent {
  membersService = inject(MembersService);
  faClock = faClock;
  faProject = faBoxes;
  faTasks = faTasks;
  // TODO: Find a better way to handle the /members redirecting to a random member.
  member$ = this.getParams$.pipe(
    // We unsubscribe from the params observable after the first value.
    take(1),
    // We retrieve & store the result via TransferState if there is a route param id.
    this.runTransferStateOperation(
      ({ id }) =>
        id ? `getMemberOrRandomBySlug-${id}` : 'skip-transfer-state',
      ({ id }) => this.membersService.getMemberOrRandomBySlug$(id)
    ),
    // We navigate to the member's slug if the id (if it's the same do nothing).
    tap((member) =>
      this._router.navigate(
        [
          'members',
          // TODO: Find a better way to construct the member slug name.
          `${member.firstName.charAt(0)}${member.lastName}`
            .toLowerCase()
            // TODO: Wait for a fix backend side removing special characters.
            .replace('é', 'e'),
        ],
        { replaceUrl: true }
      )
    )
  );
  private readonly _dialog = inject(Dialog);
  stringToIcon = SocialIconToFa;

  openDialog() {
    this._dialog.open(ModalRootComponent, {
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
    this._dialog.open(ModalRootComponent, {
      data: {
        portalContent: ModalTestComponent,
        portalData: {},
        modalPosition: ['modal-bottom', 'sm:modal-middle'],
      } as ModalConfig<ModalTestComponent>,
    });
  }
}
