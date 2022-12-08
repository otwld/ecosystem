import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { translocoConfig } from '@ngneat/transloco';
import { enableElfProdMode } from '@ngneat/elf';

if (environment.production) {
  enableProdMode();
  translocoConfig(
    {
      prodMode: true,
    }
  )
  enableElfProdMode();
}

function bootstrap() {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
}

if (document.readyState === 'complete') {
  bootstrap();
} else {
  document.addEventListener('DOMContentLoaded', bootstrap);
}
