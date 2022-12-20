import { Inject, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TawkToService } from './tawk-to.service';
import { isBrowser } from '../utils/platform';
import {
  TAWK_TO_CONFIGURATION,
  TawkToConfiguration,
} from './tawk-to-configuration';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class TawkToModule {
  private isBrowser = isBrowser();

  constructor(
    private readonly tawkToService: TawkToService,
    @Inject(TAWK_TO_CONFIGURATION)
    private readonly configuration: TawkToConfiguration
  ) {
    if (this.isBrowser) {
      this.tawkToService.init(configuration);
    }
  }

  static forRoot(
    configuration?: Partial<TawkToConfiguration>
  ): ModuleWithProviders<TawkToModule> {
    return {
      ngModule: TawkToModule,
      providers: [
        {
          provide: TAWK_TO_CONFIGURATION,
          useValue: configuration,
        },
        TawkToService,
      ],
    };
  }
}
