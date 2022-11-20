import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBrain,
  faCloud,
  faCode,
  faDatabase,
  faHands,
  faLayerGroup,
} from '@fortawesome/free-solid-svg-icons';
import { BaseComponent, ButtonComponent, CardIconComponent } from '@otwld/ui';
import { RouterLinkWithHref } from '@angular/router';

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
  services = [
    {
      icon: faHands,
      title: 'IT Management',
      route: '/services/it-management',
    },
    {
      icon: faCloud,
      title: 'Cloud Service',
      route: '/services/cloud-service',
    },
    {
      icon: faDatabase,
      title: 'Data Service',
      route: '/services/data-service',
    },
    {
      icon: faLayerGroup,
      title: 'Cloud Security',
      route: '/services/cloud-security',
    },
    {
      icon: faCode,
      title: 'Web Service',
      route: '/services/web-service',
    },
    {
      icon: faBrain,
      title: 'Machine Learning',
      route: '/services/machine-learning',
    },
  ];
}
