// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  baseUrl: 'http://localhost:4200',
  production: false,
  templates: {
    services: {
      'desktop-development': {
        enURL: './assets/static/services/en/desktop-development.html',
        frURL: './assets/static/services/fr/desktop-development.html',
      },
      'mobile-development': {
        enURL: './assets/static/services/en/mobile-development.html',
        frURL: './assets/static/services/fr/mobile-development.html',
      },
      'product-development': {
        enURL: './assets/static/services/en/product-development.html',
        frURL: './assets/static/services/fr/product-development.html',
      },
      'team-extension': {
        enURL: './assets/static/services/en/team-extension.html',
        frURL: './assets/static/services/fr/team-extension.html',
      },
      'web-development': {
        enURL: './assets/static/services/en/web-development.html',
        frURL: './assets/static/services/fr/web-development.html',
      },
    },
    portfolio: {
      mesdocteurs: {
        enURL: './assets/static/portfolio/en/mesdocteurs.html',
        frURL: './assets/static/portfolio/fr/mesdocteurs.html',
      },
      ateme: {
        enURL: './assets/static/portfolio/en/ateme.html',
        frURL: './assets/static/portfolio/fr/ateme.html',
      },
      occ: {
        enURL: './assets/static/portfolio/en/occ.html',
        frURL: './assets/static/portfolio/fr/occ.html',
      },
      jeprecommande: {
        enURL: './assets/static/portfolio/en/jeprecommande.html',
        frURL: './assets/static/portfolio/fr/jeprecommande.html',
      },
      onstage: {
        enURL: './assets/static/portfolio/en/onstage.html',
        frURL: './assets/static/portfolio/en/onstage.html',
      },
    },
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
