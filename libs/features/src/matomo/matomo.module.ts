import {
  Inject,
  Injector,
  ModuleWithProviders,
  NgModule,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import {
  MATOMO_CONFIGURATION,
  MatomoConfiguration,
} from './matomo-configuration';
import { MatomoInjector } from './matomo-injector.service';
import { MatomoTracker } from './matomo-tracker.service';
import { MatomoRouteTracker } from './matomo-route-tracker.service';

/**
 * Angular module encapsulating Matomo features.
 */
@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [MatomoInjector, MatomoTracker, MatomoRouteTracker],
})
export class MatomoModule {
  /**
   * Creates an instance of Matomo module.
   *
   * @param platformId Angular platform provided by DI.
   * @param injector Instance of Angular Injector provided by DI.
   * @param configuration Matomo configuration provided by DI.
   * @param matomoInjector Instance of MatomoInjector provided by DI.
   */
  constructor(
    // eslint-disable-next-line @typescript-eslint/ban-types
    @Inject(PLATFORM_ID) private readonly platformId: Object,
    private readonly injector: Injector,
    @Inject(MATOMO_CONFIGURATION)
    private readonly configuration: MatomoConfiguration,
    private readonly matomoInjector: MatomoInjector
  ) {
    // Warn if module is not being loaded by a browser.
    if (isPlatformBrowser(this.platformId)) {
      // Inject the Matomo script and create trackers.
      this.matomoInjector.init();
      // Enable route tracking if requested.
      if (this.configuration?.routeTracking?.enable === true) {
        // Using Injector instead of DI in order to allow use in routerless apps.
        this.injector.get(MatomoRouteTracker).startTracking();
      }
    }
  }

  /**
   * Use this method in your root module to provide the MatomoTracker service.
   */
  static forRoot(
    configuration?: Partial<MatomoConfiguration>
  ): ModuleWithProviders<MatomoModule> {
    return {
      ngModule: MatomoModule,
      providers: [
        {
          provide: MATOMO_CONFIGURATION,
          useValue: configuration,
        },
        MatomoTracker,
        MatomoRouteTracker,
      ],
    };
  }
}
