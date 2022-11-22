import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Service,
  ServicesService,
} from '../../../../services/services/services.service';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuDirective, MenuItemDirective } from '@otwld/ui';
import { ActivatedRoute, RouterLinkWithHref } from '@angular/router';
import { map, Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'otwld-services-menu-route',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    MenuItemDirective,
    MenuDirective,
    RouterLinkWithHref,
  ],
  templateUrl: './services-menu-route.component.html',
  styleUrls: ['./services-menu-route.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesMenuRouteComponent {
  faArrowRight = faArrowRight;

  services$: Observable<(Service & { active?: boolean })[]> = of(
    this.servicesService.services
  ).pipe(
    switchMap(
      (services) =>
        this.activatedRoute.firstChild?.url.pipe(
          map((url) => url[0].path),
          map((id) =>
            services.map((service) => ({
              ...service,
              active: service.route.includes(id),
            }))
          )
        ) || of(services)
    )
  );

  constructor(
    private readonly servicesService: ServicesService,
    private readonly activatedRoute: ActivatedRoute
  ) {}
}
