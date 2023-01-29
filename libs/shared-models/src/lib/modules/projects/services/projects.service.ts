import { inject, Injectable } from '@angular/core';
import {
  CarouselProjectFragment,
  GetProjectBySlugGQL,
  GetProjectBySlugQuery,
  GetProjectsPaginatedGQL,
  GetRelatedProjectsGQL,
  GetRelatedProjectsQuery,
} from '../../../gateway/generated-api-gateway';
import { map, Observable, switchMap } from 'rxjs';
import { RequestWithTranslationUtils } from '../../../utils/request-with-translation.utils';

@Injectable({ providedIn: 'root' })
export class ProjectsService extends RequestWithTranslationUtils {
  getProjectBySlugGql = inject(GetProjectBySlugGQL);
  getRelatedProjectsBySlugGql = inject(GetRelatedProjectsGQL);
  getProjectsPaginatedGQL = inject(GetProjectsPaginatedGQL);

  getProjectBySlug$(
    slug: string
  ): Observable<GetProjectBySlugQuery['getProjectBySlug']> {
    return this.langChangeUpdate$().pipe(
      switchMap(() =>
        this.getProjectBySlugGql.fetch(
          { slug },
          { fetchPolicy: 'network-only' }
        )
      ),
      map(({ data }) => data.getProjectBySlug)
    );
  }

  getRelatedProjectsBySlug$(
    slug: string
  ): Observable<GetRelatedProjectsQuery['getRelatedProjects']> {
    return this.langChangeUpdate$().pipe(
      switchMap(() =>
        this.getRelatedProjectsBySlugGql.fetch(
          { slug },
          { fetchPolicy: 'network-only' }
        )
      ),
      map(({ data }) => data.getRelatedProjects)
    );
  }

  getPaginatedProjects$(): Observable<CarouselProjectFragment[]> {
    return this.langChangeUpdate$().pipe(
      switchMap(() =>
        this.getProjectsPaginatedGQL.fetch(
          { pagination: { after: 4 } },
          { fetchPolicy: 'network-only' }
        )
      ),
      map((result) => {
        if (result.data.getProjects.edges) {
          return result.data.getProjects.edges
            .map((edge) => edge?.node || null)
            .filter((node) => node !== null) as CarouselProjectFragment[];
        } else {
          return [];
        }
      })
    );
  }
}
