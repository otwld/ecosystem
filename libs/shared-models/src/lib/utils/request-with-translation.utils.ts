import {TranslocoService} from '@ngneat/transloco';
import {inject} from '@angular/core';
import {startWith} from 'rxjs';

export class RequestWithTranslationUtils {
  translocoService = inject(TranslocoService);

  langChangeUpdate$() {
    return this.translocoService.langChanges$.pipe(startWith(this.translocoService.getActiveLang()));
  }
}
