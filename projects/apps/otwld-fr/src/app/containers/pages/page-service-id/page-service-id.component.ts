import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ServiceService,
} from '../../../services/services/service.service';
import { ActivatedRoute } from '@angular/router';
import { catchError, filter, map, of, switchMap } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Service } from '../../../types/service.types';

@Component({
  selector: 'otwld-page-service-id',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './page-service-id.component.html',
  styleUrls: ['./page-service-id.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageServiceIdComponent {
  currentService$ = this.activatedRoute.params.pipe(
    map((params) =>
      this.servicesService.services.find((service) =>
        service.route.includes(params['id'])
      )
    )
  );

  loadContent$ = this.currentService$.pipe(
    filter((service) => !!service),
    switchMap((service) =>
      this.httpClient
        .get((service as Service).templateURL, {
          responseType: 'text',
        })
        .pipe(
          catchError(() =>
            of(
              '<span class="text-error">Service or TemplateService not found</span>'
            )
          )
        )
    ),
    map((content) => this.domSanitizer.bypassSecurityTrustHtml(content))
  );

  constructor(
    private readonly servicesService: ServiceService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly httpClient: HttpClient,
    private readonly domSanitizer: DomSanitizer
  ) {}
}
