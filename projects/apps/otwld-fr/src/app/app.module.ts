import { inject, NgModule } from '@angular/core';
import { BrowserModule, Meta, Title } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app.routing';
import { NavbarDefaultComponent } from './components/navbar/navbar-default.component';
import {
  DrawerComponent,
  DrawerContentComponent,
  DrawerSideComponent,
  LayoutComponent,
} from '@otwld/ui';
import { DateFnsConfigurationService, DateFnsModule } from 'ngx-date-fns';
import { enUS, fr } from 'date-fns/locale';
import { DialogModule } from '@angular/cdk/dialog';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { TranslocoService } from '@ngneat/transloco';
import {
  MatomoModule,
  MatomoTracker,
  whenLangLoadedOrChanged$,
} from '@otwld/features';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'otwld-fr' }),
    NavbarDefaultComponent,
    FontAwesomeModule,
    FooterComponent,
    AppRoutingModule,
    LayoutComponent,
    DateFnsModule.forRoot(),
    MatomoModule.forRoot({
      scriptUrl: '//matomo.outworld.fr/matomo.js',
      trackers: [
        {
          trackerUrl: 'https://matomo.outworld.fr/matomo.php',
          siteId: 1,
        },
      ],
      routeTracking: {
        enable: true,
      },
    }),
    DialogModule,
    HttpClientModule,
    TranslocoRootModule,
    DrawerComponent,
    DrawerSideComponent,
    DrawerContentComponent,
  ],
  providers: [
    {
      provide: DateFnsConfigurationService,
      useFactory: () => {
        const translocoService = inject(TranslocoService);
        const dateFnsConfig = new DateFnsConfigurationService();
        translocoService.langChanges$.subscribe((lang) => {
          dateFnsConfig.setLocale(lang === 'fr' ? fr : enUS);
        });
        return dateFnsConfig;
      },
    }, // <-- All pipes in French by default
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  private matomoTracker = inject(MatomoTracker);
  private title = inject(Title);
  private meta = inject(Meta);
  private translocoService = inject(TranslocoService);
  private whenLangLoadedOrChanged$ = whenLangLoadedOrChanged$();

  constructor() {
    this.matomoTracker.trackVisibleContentImpressions(true, 500);
    this.whenLangLoadedOrChanged$.subscribe(() => {
      this.title.setTitle(this.translocoService.translate('meta.title'));
      this.meta.addTag({
        name: 'description',
        content: this.translocoService.translate('meta.description') || '',
      });
      this.meta.addTag({
        name: 'og:title',
        content: this.translocoService.translate('meta.og.title') || '',
      });
      this.meta.addTag({
        name: 'og:description',
        content: this.translocoService.translate('meta.og.description') || '',
      });
      this.meta.addTag({
        name: 'twitter:title',
        content: this.translocoService.translate('meta.twitter.title') || '',
      });
    });
  }
}
