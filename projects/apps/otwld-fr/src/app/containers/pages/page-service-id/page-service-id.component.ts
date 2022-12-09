import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ServiceService,
} from '../../../services/services/service.service';
import { ActivatedRoute } from '@angular/router';
import { catchError, combineLatest, filter, map, of, switchMap, tap } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Service } from '../../../types/service.types';
import { TranslocoService } from '@ngneat/transloco';
import { BreadcrumbsService } from '../../../services/breadcrumbs/breadcrumbs.service';

@Component({
  selector: 'otwld-page-service-id',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './page-service-id.component.html',
  styleUrls: ['./page-service-id.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageServiceIdComponent {
  onLangChange$ = inject(TranslocoService).langChanges$;
  currentService$ = this.activatedRoute.params.pipe(
    switchMap((params) =>
      this.servicesService.findOneByRoute(params['id'])
    ),
    tap(service => {
      if (service) {
        this.breadcrumbsService.addBreadcrumb({
          labelTranslationKey: service.title,
          url: service.route,
        })
      }
    })
  );

  loadContent$ = combineLatest([this.onLangChange$, this.currentService$]).pipe(
    filter(([,service]) => !!service),
    switchMap(([lang, service]) =>
      this.httpClient
        .get(lang === 'en' ? (service as Service).templates.en : (service as Service).templates.fr, {
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
    private readonly domSanitizer: DomSanitizer,
    private readonly breadcrumbsService: BreadcrumbsService,
  ) {
  }
}
