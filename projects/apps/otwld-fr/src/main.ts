import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { enableElfProdMode } from '@ngneat/elf';
import { translocoConfig } from '@ngneat/transloco';

if (environment.production) {
  enableProdMode();
  enableElfProdMode();
  translocoConfig({
    prodMode: true
  })
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
