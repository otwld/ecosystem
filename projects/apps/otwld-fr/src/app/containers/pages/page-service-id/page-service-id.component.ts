import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {switchMap, tap} from 'rxjs';
import {HttpClientModule} from '@angular/common/http';
import {BreadcrumbsService} from '../../../services/breadcrumbs/breadcrumbs.service';
import {ServicesService} from '@ecosystem/shared-models';

@Component({
  selector: 'otwld-page-service-id',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './page-service-id.component.html',
  styleUrls: ['./page-service-id.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageServiceIdComponent {

  getService$ = this.activatedRoute.params.pipe(
    switchMap((params) =>
      this.servicesService.getServiceBySlug$(params['id'])
    ),
    tap(service => {
      if (service) {
        this.breadcrumbsService.addBreadcrumb({
          labelTranslationKey: service.title,
          url: service.slug,
        })
      }
    })
  );

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly breadcrumbsService: BreadcrumbsService,
    private readonly servicesService: ServicesService,
  ) {
  }
}
