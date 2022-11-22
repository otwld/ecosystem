import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { HeroBreadcrumbsComponent } from '../../sections/hero/hero-heading/hero-breadcrumbs.component';
import {
  HeroComponent,
  HeroContentComponent,
  MenuDirective,
  MenuItemDirective,
} from '@otwld/ui';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ServicesMenuRouteComponent } from './services-menu-route/services-menu-route.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'otwld-page-services',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroBreadcrumbsComponent,
    HeroComponent,
    HeroContentComponent,
    MenuDirective,
    MenuItemDirective,
    FontAwesomeModule,
    ServicesMenuRouteComponent,
    RouterOutlet,
  ],
  templateUrl: './page-services.component.html',
  styleUrls: ['./page-services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageServicesComponent {}
