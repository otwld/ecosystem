import { Injectable } from '@angular/core';
import { filter, map, switchMap } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private onRouteData$ = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    map((event) => event as NavigationEnd),
    map(() => {
      let currentRoute = this.router.routerState.root;
      while (currentRoute.firstChild) {
        currentRoute = currentRoute.firstChild;
      }
      return currentRoute;
    }),
    switchMap((route) => route.data)
  );

  shouldScrollTop$ = this.onRouteData$
    .pipe(
      filter((data) => data['scrollPositionRestoration'] !== 'disabled'),
      map(data => data['scrollOffset'])
    )

  constructor(private readonly router: Router) {}


}
