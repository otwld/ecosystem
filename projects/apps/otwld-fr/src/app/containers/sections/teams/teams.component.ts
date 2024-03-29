import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardActionsComponent,
  CardBodyComponent,
  CardComponent,
  CardImageComponent,
  CardImageDirective,
  CardTitleDirective,
  ContainerComponent,
  IsInViewportDirective,
  provideComponentConfiguration,
} from '@otwld/ui';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLinkWithHref } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { injectTrackEvent } from '@otwld/features';
import { MembersService, SocialIconToFa } from '@ecosystem/shared-models';

@Component({
  selector: 'otwld-teams',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    IsInViewportDirective,
    CardImageDirective,
    CardTitleDirective,
    CardImageComponent,
    CardActionsComponent,
    CardBodyComponent,
    FontAwesomeModule,
    RouterLinkWithHref,
    TranslocoModule,
  ],
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    provideComponentConfiguration({
      name: 'container-teams',
      type: 'container',
    })
  ]
})
export class TeamsComponent extends ContainerComponent {
  private readonly _membersService = inject(MembersService);
  members$ = this.createTransferStateOperation('getAllMembers', this._membersService.getAllMembers$());
  trackEvent = injectTrackEvent();
  stringToIcon = SocialIconToFa
}
