import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  MenuDirective,
  MenuItemDirective,
  provideComponentConfiguration,
  SmartComponent,
} from '@otwld/ui';
import {
  ActivatedRoute,
  RouterLink,
  RouterLinkWithHref,
} from '@angular/router';
import { map, Observable, of, switchMap } from 'rxjs';
import { TranslocoModule } from '@ngneat/transloco';
import { GetAllServicesQuery, ServicesService } from '@ecosystem/shared-models';

type ServiceWithActive = (GetAllServicesQuery['getAllServices'] extends (infer U)[] ? U : GetAllServicesQuery['getAllServices']) & { active?: boolean }

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
    RouterLink,
  ],
  templateUrl: './services-menu-route.component.html',
  styleUrls: ['./services-menu-route.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers:[
    provideComponentConfiguration({
      name: 'smart-services-menu-route',
      type: 'smart',
    })
  ]
})
export class ServicesMenuRouteComponent extends SmartComponent {
  faArrowRight = faArrowRight;

  services$: Observable<ServiceWithActive[]> = this.createTransferStateOperation('getAllServices$', this.servicesService.getAllServices$())
    .pipe(
      switchMap((services) => {
        return (
          this.activatedRoute.firstChild?.url.pipe(
            map((url) => url[0].path),
            map((id) =>
              services.map((service) => ({
                ...service,
                active: service.slug.includes(id),
              }))
            )
          ) || of(services)
        );
      }),
    );

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly servicesService: ServicesService
  ) {
    super();
  }
}
