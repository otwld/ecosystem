import {inject, Injectable} from '@angular/core';
import {
  GetAllServicesGQL,
  GetAllServicesQuery,
  GetServiceBySlugGQL,
  GetServiceBySlugQuery
} from '../../../gateway/generated-api-gateway';
import {map, Observable, switchMap} from 'rxjs';
import {TranslocoService} from '@ngneat/transloco';
import {RequestWithTranslationUtils} from '../../../utils/request-with-translation.utils';

@Injectable({
  providedIn: 'root',
})
export class ServicesService extends RequestWithTranslationUtils {
  getAllServicesGql = inject(GetAllServicesGQL);
  getServiceBySlugGql = inject(GetServiceBySlugGQL);

  getAllServices$(): Observable<GetAllServicesQuery['getAllServices']> {
    return this.langChangeUpdate$().pipe(
      switchMap(() => this.getAllServicesGql.fetch({}, {fetchPolicy: 'network-only'})),
      map((result) => result.data.getAllServices)
    );
  }

  getServiceBySlug$(slug: string): Observable<GetServiceBySlugQuery['getService']> {
    return this.langChangeUpdate$().pipe(
      switchMap(() => this.getServiceBySlugGql.fetch({slug}, {fetchPolicy: 'network-only'})),
      map((result) => result.data.getService)
    );
  }
}
