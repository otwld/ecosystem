import { inject, Injectable } from '@angular/core';
import { MatomoTracker } from '@otwld/ui';

@Injectable({
  providedIn: 'root',
})
export class DevService {
  private matomoService = inject(MatomoTracker);

  matomoDebug() {
    /**
     * In Matomo 2.15 we added a new method logAllContentBlocksOnPage to log all found content blocks within a page to the console. It will log an array of all content blocks to the console.
     */
    this.matomoService.logAllContentBlocksOnPage();
  }
}
