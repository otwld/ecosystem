import { inject, Injectable } from '@angular/core';
import { DynamicScriptLoaderService } from '@otwld/features';
import { TawkToConfiguration } from './tawk-to-configuration';

export interface Tawk_API {
  onLoaded: boolean;

  hideWidget(): void;

  showWidget(): void;

  minimize(): void;

  maximize(): void;

  setAttributes(attributes: Record<string, unknown>): void;

  setAttribute(name: string, value: unknown): void;

  getAttribute(name: string): unknown;

  removeAttribute(name: string): void;

  toggle(): void;
}

@Injectable({
  providedIn: 'root',
})
export class TawkToService {
  private scriptLoaderService = inject(DynamicScriptLoaderService);

  private _Tawk_API: Tawk_API | undefined;

  get Tawk_API(): Tawk_API {
    if (!this._Tawk_API) {
      throw new Error('TawkToService not initialized');
    }
    return this._Tawk_API;
  }

  init(configuration: TawkToConfiguration) {
    this.scriptLoaderService.registerScript<Tawk_API>(
      'tawk-to',
      configuration.baseScriptUrl +
        '/' +
        configuration.entityID +
        '/' +
        configuration.widgetID,
      'Tawk_API',
      (e, ready) => {
        if (e && e.onLoaded) {
          ready(e);
        }
      }
    );
    this.scriptLoaderService.load<Tawk_API>('tawk-to').then((global) => {
      if (global) {
        this._Tawk_API = global;
      }
    });
  }
}
