import { inject } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { distinctUntilChanged, filter, switchMap } from 'rxjs';

export const whenLangLoadedOrChanged$ = () => {
  const translocoService = inject(TranslocoService);
  return translocoService.events$.pipe(
    filter((e) => e.type === 'translationLoadSuccess'),
    switchMap(() => translocoService.langChanges$),
    distinctUntilChanged(),
  );
};
