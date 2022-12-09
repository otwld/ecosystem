import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { MEMBERS_DATA } from '../../../data/members.data';

@Injectable({
  providedIn: 'root',
})
export class TeamMemberService {
  getAll() {
    return of(MEMBERS_DATA);
  }

  getOneByRoute(route: string) {
    return of(MEMBERS_DATA.find((member) => member.route.includes(route)));
  }
}
