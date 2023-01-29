import { TranslocoService } from '@ngneat/transloco';
import { inject } from '@angular/core';
import { delay, startWith } from 'rxjs';

export class RequestWithTranslationUtils {
  translocoService = inject(TranslocoService);

  langChangeUpdate$() {
    return this.translocoService.langChanges$.pipe(
      startWith(this.translocoService.getActiveLang()),
      delay(0) // TODO(ntrehout): Find a better way to wait for Interceptor to set the lang.
    );
  }
}
