import {inject, Injectable} from '@angular/core';
import {
  CarouselProjectFragment,
  GetProjectBySlugGQL,
  GetProjectBySlugQuery,
  GetProjectsPaginatedGQL,
  GetRelatedProjectsGQL,
  GetRelatedProjectsQuery
} from '../../../gateway/generated-api-gateway';
import {map, Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProjectsService {
  getProjectBySlugGql = inject(GetProjectBySlugGQL);
  getRelatedProjectsBySlugGql = inject(GetRelatedProjectsGQL);
  getProjectsPaginatedGQL = inject(GetProjectsPaginatedGQL);

  getProjectBySlug$(slug: string): Observable<GetProjectBySlugQuery['getProjectBySlug']> {
    return this.getProjectBySlugGql.fetch({slug}).pipe(map(({data}) => data.getProjectBySlug))
  }

  getRelatedProjectsBySlug$(slug: string): Observable<GetRelatedProjectsQuery['getRelatedProjects']> {
    return this.getRelatedProjectsBySlugGql.fetch({slug}).pipe(map(({data}) => data.getRelatedProjects));
  }

  getPaginatedProjects$(): Observable<CarouselProjectFragment[]> {
    return this.getProjectsPaginatedGQL.fetch({pagination: {after: 4}})
      .pipe(map((result) => {
        if (result.data.getProjects.edges) {
          return result.data.getProjects.edges.map((edge) => edge?.node || null)
            .filter((node) => node !== null) as CarouselProjectFragment[];
        } else {
          return [];
        }
      }));
  }
}
