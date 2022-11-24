import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { NavbarDefaultComponent } from '../../../components/navbar/navbar-default.component';

@Component({
  selector: 'otwld-page-services',
  standalone: true,
  imports: [
    CommonModule,
    NavbarDefaultComponent,
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
