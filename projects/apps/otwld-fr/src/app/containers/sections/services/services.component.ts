import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BaseComponent, ButtonComponent, CardIconComponent, LoopLiteralsDirective } from '@otwld/ui';
import { RouterLink, RouterLinkWithHref } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { injectTrackEvent } from '@otwld/features';
import {ServicesService, SocialIconToFa} from '@ecosystem/shared-models';

@Component({
  selector: 'otwld-services',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    CardIconComponent,
    ButtonComponent,
    RouterLinkWithHref,
    TranslocoModule,
    RouterLink,
    LoopLiteralsDirective
  ],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent extends BaseComponent {
  services$ = this.servicesServices.getAllServices$();

  trackEvent = injectTrackEvent();

  constructor(private readonly servicesServices: ServicesService) {
    super();
  }

  stringToIcon = SocialIconToFa;
}
