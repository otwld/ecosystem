import {inject, Injectable} from '@angular/core';
import {TranslocoService} from '@ngneat/transloco';
import {map, Observable, startWith, switchMap, take} from 'rxjs';
import {GetMemberBySlugGQL, GetMemberBySlugQuery, Project} from '../../../gateway/generated-api-gateway';

type MemberWithoutNodes = Omit<GetMemberBySlugQuery['getMemberBySlug'], 'projects'> & { projects: Pick<Project, 'services' | 'title' | 'slug' | 'image'>[] };

@Injectable({providedIn: 'root'})
export class MembersService {
  translocoService = inject(TranslocoService);

  /* ======= GQL ======= */
  getMemberBySlugGQL = inject(GetMemberBySlugGQL);

  getMemberBySlug$(slug: string): Observable<MemberWithoutNodes> {
    return this.translocoService.langChanges$.pipe(startWith(this.translocoService.getActiveLang()),
      switchMap(() => this.getMemberBySlugGQL.fetch({slug}, {fetchPolicy: 'network-only'})),
      map((member) => member.data.getMemberBySlug),
      map((member) => this.projectNodeToProjects(member)));
  }

  private projectNodeToProjects(member: GetMemberBySlugQuery['getMemberBySlug']): MemberWithoutNodes {
    return {
      ...member,
      projects: member.projects.edges.map((edge) => edge?.node || null).filter((node) => node !== null) as Project[],
    }
  }
}
