import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomRoute } from './utils/router.utils';

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
        redirectTo: '/services/web-development',
      },
      {
        path: ':slug',
        loadComponent: () =>
          import(
            './containers/pages/page-service-id/page-service-id.component'
          ).then((m) => m.PageServiceIdComponent),
        data: {
          titleTranslationKey: 'service-details',
        },
      },
    ],
    data: {
      titleTranslationKey: 'services.title',
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
        path: ':slug',
        loadComponent: () =>
          import(
            './containers/pages/page-portfolio/page-portfolio.component'
          ).then((m) => m.PagePortfolioComponent),
        data: {
          titleTranslationKey: 'portfolio',
        },
      },
    ],
    data: {
      titleTranslationKey: 'portfolio',
    },
  },
  {
    path: 'members',
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import(
            './containers/pages/page-team-member-id/page-team-member-id.component'
          ).then((m) => m.PageTeamMemberIdComponent),
        data: {
          titleTranslationKey: 'Team member',
        },
      },
      {
        path: ':id',
        loadComponent: () =>
          import(
            './containers/pages/page-team-member-id/page-team-member-id.component'
          ).then((m) => m.PageTeamMemberIdComponent),
        data: {
          titleTranslationKey: 'Team member',
        },
      },
    ],
  },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      initialNavigation: 'enabledBlocking'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
