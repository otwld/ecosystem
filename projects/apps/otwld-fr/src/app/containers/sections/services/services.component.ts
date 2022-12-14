import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BaseComponent, ButtonComponent, CardIconComponent, LoopLiteralsDirective } from '@otwld/ui';
import { RouterLink, RouterLinkWithHref } from '@angular/router';
import { ServiceService } from '../../../services/services/service.service';
import { TranslocoModule } from '@ngneat/transloco';
import { injectTrackEvent } from '@otwld/features';

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
  services$ = this.servicesServices.getAll();

  trackEvent = injectTrackEvent();

  constructor(private readonly servicesServices: ServiceService) {
    super();
  }
}
