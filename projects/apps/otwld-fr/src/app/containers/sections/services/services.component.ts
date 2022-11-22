import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BaseComponent, ButtonComponent, CardIconComponent } from '@otwld/ui';
import { RouterLinkWithHref } from '@angular/router';
import { ServicesService } from '../../../services/services/services.service';

@Component({
  selector: 'otwld-services',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    CardIconComponent,
    ButtonComponent,
    RouterLinkWithHref,
  ],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent extends BaseComponent {
  services = this.servicesServices.services;

  constructor(private readonly servicesServices: ServicesService) {
    super();
  }
}
