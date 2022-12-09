import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BaseComponent, ButtonComponent, CardIconComponent } from '@otwld/ui';
import { RouterLink, RouterLinkWithHref } from '@angular/router';
import { ServiceService } from '../../../services/services/service.service';
import { TranslocoModule } from '@ngneat/transloco';

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
  ],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent extends BaseComponent {
  services$ = this.servicesServices.getAll();

  constructor(private readonly servicesServices: ServiceService) {
    super();
  }
}
