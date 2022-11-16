import { createStore, withProps } from '@ngneat/elf';
import { Injectable } from '@angular/core';
import { localStorageStrategy, persistState } from '@ngneat/elf-persist-state';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SettingsProps {
  darkMode: boolean;
}

@Injectable({ providedIn: 'root' })
export class SettingsRepository {
  // eslint-disable-next-line rxjs/no-exposed-subjects
  get store$() {
    return this._store$;
  }
  private readonly _store$;
  private readonly persist;

  constructor() {
    this._store$ = this.createStore$();
    this.persist = this.persistState();
  }

  private createStore$(): typeof store$ {
    const store$ = createStore(
      { name: 'settings' },
      withProps<SettingsProps>({
        darkMode: false,
      })
    );

    return store$;
  }

  private persistState() {
    return persistState(this._store$, {
      // key: 'settings',
      // preStoreInit: (value) => value,
      source: (store$) => store$,
      storage: localStorageStrategy,
    });
  }
}
