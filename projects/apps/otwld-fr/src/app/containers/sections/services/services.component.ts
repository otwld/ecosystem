import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  ButtonComponent,
  CardIconComponent,
  ContainerComponent,
  LoopLiteralsDirective,
  provideComponentConfiguration,
} from '@otwld/ui';
import { RouterLink, RouterLinkWithHref } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { injectTrackEvent } from '@otwld/features';
import { ServicesService, SocialIconToFa } from '@ecosystem/shared-models';

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
    LoopLiteralsDirective,
  ],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    provideComponentConfiguration({
      name: 'container-services',
      type: 'container',
    }),
  ],
})
export class ServicesComponent extends ContainerComponent {
  private readonly _servicesService = inject(ServicesService);
  services$ = this.createTransferStateOperation(
    'getAllServices',
    this._servicesService.getAllServices$()
  );

  trackEvent = injectTrackEvent();

  stringToIcon = SocialIconToFa;
}
