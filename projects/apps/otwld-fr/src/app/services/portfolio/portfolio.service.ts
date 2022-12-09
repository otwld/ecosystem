import { Injectable } from '@angular/core';
import { PortfolioItem } from '../../types/portfolio.types';
import { UntilDestroy } from '@ngneat/until-destroy';
import { PORTFOLIO_DATA } from '../../../data/portfolio.data';
import { of } from 'rxjs';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  getOneByRoute(route: string): PortfolioItem | undefined {
    return PORTFOLIO_DATA.find((item) => item.route.includes(route));
  }

  getAll() {
    return of(PORTFOLIO_DATA);
  }

  findByMemberFirstName(firstName: string) {
    return of(
      PORTFOLIO_DATA.filter((item) =>
        item.members.find((e) => e.firstName === firstName)
      )
    );
  }
}
