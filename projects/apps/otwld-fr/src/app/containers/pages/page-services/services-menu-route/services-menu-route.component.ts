import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ServiceService,
} from '../../../../services/services/service.service';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BaseComponent, MenuDirective, MenuItemDirective } from '@otwld/ui';
import { ActivatedRoute, RouterLinkWithHref } from '@angular/router';
import { map, Observable, of, switchMap } from 'rxjs';
import { Service } from '../../../../types/service.types';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'otwld-services-menu-route',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    MenuItemDirective,
    MenuDirective,
    RouterLinkWithHref,
    TranslocoModule,
  ],
  templateUrl: './services-menu-route.component.html',
  styleUrls: ['./services-menu-route.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesMenuRouteComponent extends BaseComponent {
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
    private readonly servicesService: ServiceService,
    private readonly activatedRoute: ActivatedRoute
  ) {
    super();
  }
}
