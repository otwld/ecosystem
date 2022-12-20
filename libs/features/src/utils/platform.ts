import { inject } from '@angular/core';
import { Platform } from '@angular/cdk/platform';

export const ifBrowser = (run: () => void) => {
  const platform = inject(Platform);
  if (platform.isBrowser) {
    run();
  }
};

export const isBrowser = () => inject(Platform).isBrowser;
