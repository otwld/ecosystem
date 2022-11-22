import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomRoute } from './utils/router.utils'; // CLI imports router

const routes: CustomRoute[] = [
  {
    path: '',
    loadComponent: () =>
      import('./containers/pages/page-clients/page-clients.component').then(
        (m) => m.PageClientsComponent
      ),
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./containers/pages/page-services/page-services.component').then(
        (m) => m.PageServicesComponent
      ),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/services/it-management',
      },
      {
        path: ':id',
        loadComponent: () =>
          import(
            './containers/pages/page-service-id/page-service-id.component'
            ).then((m) => m.PageServiceIdComponent),
      },
    ],
    data: {
      titleTranslationKey: 'services',
    },
  },
  {
    path: 'portfolio',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/portfolio/occ',
      },
      {
        path: ':id',
        loadComponent: () =>
          import(
            './containers/pages/page-portfolio/page-portfolio.component'
            ).then((m) => m.PagePortfolioComponent),
      },
    ],
    data: {
      titleTranslationKey: 'portfolio',
    },
  },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    scrollOffset: [0, 0]
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
