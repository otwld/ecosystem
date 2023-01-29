import {inject, Injectable} from '@angular/core';
import {TranslocoService} from '@ngneat/transloco';
import {map, Observable, switchMap} from 'rxjs';
import {
  GetAllMembersGQL,
  GetAllMembersQuery,
  GetMemberBySlugGQL,
  GetMemberBySlugQuery,
  Media,
  Project
} from '../../../gateway/generated-api-gateway';
import {RequestWithTranslationUtils} from '../../../utils/request-with-translation.utils';

type MemberWithoutNodes =
  Omit<GetMemberBySlugQuery['getMemberBySlug'], 'projects' | 'medias'>
  & { projects: Pick<Project, 'services' | 'title' | 'slug' | 'image'>[], medias: Media[] };

@Injectable({providedIn: 'root'})
export class MembersService extends RequestWithTranslationUtils {

  /* ======= GQL ======= */
  getMemberBySlugGQL = inject(GetMemberBySlugGQL);
  getAllMembersGQL = inject(GetAllMembersGQL);

  getMemberBySlug$(slug: string): Observable<MemberWithoutNodes> {
    return this.langChangeUpdate$()
      .pipe(switchMap(() => this.getMemberBySlugGQL.fetch({slug}, {fetchPolicy: 'network-only'})),
        map((member) => member.data.getMemberBySlug),
        map((member) => this.projectNodeToProjects(member)));
  }

  getAllMembers$(): Observable<GetAllMembersQuery['getAllMembers']> {
    return this.langChangeUpdate$().pipe(switchMap(() => {
      return this.getAllMembersGQL.fetch({}, {fetchPolicy: 'network-only'});
    }), map((result) => result.data.getAllMembers))
  }

  private projectNodeToProjects(member: GetMemberBySlugQuery['getMemberBySlug']): MemberWithoutNodes {
    return {
      ...member,
      projects: member.projects.edges.map((edge) => edge?.node || null).filter((node) => node !== null) as Project[],
      medias: member.medias.edges.map((edge) => edge?.node || null).filter((node) => node !== null) as Media[],
    }
  }
}
