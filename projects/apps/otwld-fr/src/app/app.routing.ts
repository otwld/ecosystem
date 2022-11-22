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
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
