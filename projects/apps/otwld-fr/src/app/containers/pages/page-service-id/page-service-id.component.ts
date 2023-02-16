import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { tap } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { ServicesService } from '@ecosystem/shared-models';
import { PageComponent, provideComponentConfiguration } from '@otwld/ui';

@Component({
  selector: 'otwld-page-service-id',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './page-service-id.component.html',
  styleUrls: ['./page-service-id.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    provideComponentConfiguration({
      name: 'page-service-id',
      type: 'page',
    }),
  ],
})
export class PageServiceIdComponent extends PageComponent {
  private readonly _servicesService = inject(ServicesService);

  getService$ = this.getParams$.pipe(
    this.runTransferStateOperation(
      ({ slug }) => `getServiceBySlug-${slug}`,
      ({ slug }) => this._servicesService.getServiceBySlug$(slug)
    ),
    tap((service) => this.setBreadcrumb(service.title, '/services/' + service.slug)),
  );
}
