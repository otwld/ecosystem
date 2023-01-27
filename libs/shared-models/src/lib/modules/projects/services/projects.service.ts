import {inject, Injectable} from '@angular/core';
import {GetProjectBySlugGQL, GetProjectBySlugQuery} from '../../../gateway/generated-api-gateway';
import {map, Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProjectsService {
  getProjectBySlugGql = inject(GetProjectBySlugGQL);

  getProjectBySlug$(slug: string): Observable<GetProjectBySlugQuery['getProjectBySlug']> {
    return this.getProjectBySlugGql.fetch({slug}).pipe(map(({data}) => data.getProjectBySlug))
  }
}
