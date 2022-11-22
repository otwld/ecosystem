import { Route } from '@angular/router';

export type RouteData = {
  titleTranslationKey: string;
};

export const createRouteData = (routeData: RouteData) => routeData;

export interface CustomRoute extends Route {
  data?: RouteData;
  children?: CustomRoute[];
}
