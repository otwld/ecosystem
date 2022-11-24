import { Route } from '@angular/router';

export type RouteData = {
  titleTranslationKey: string;
  scrollPositionRestoration?: string;
  scrollOffset?: number;
};

export const createRouteData = (routeData: RouteData) => routeData;

export interface CustomRoute extends Route {
  data?: RouteData;
  children?: CustomRoute[];
}

// export const getAllData = (activatedRoute: ActivatedRoute, params: Params = {}) => activatedRoute.
