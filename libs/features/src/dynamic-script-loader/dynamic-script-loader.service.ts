import { inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

interface Script<T> {
  src: string;
  state: 'loading' | 'loaded' | 'ready' | 'error' | 'not-loaded';
  globalName?: string;
  getGlobalWhen: (element: T | undefined, cb: (element: T) => void) => void;
}

declare const window: Window & { [key: string]: unknown };

@Injectable({
  providedIn: 'root',
})
export class DynamicScriptLoaderService {
  private document = inject(DOCUMENT);
  private scripts = new Map<string, Script<unknown>>();

  load<T>(name: string) {
    // Load the script if it's not loaded already
    // Return the promise that will resolve when the script is loaded and gives us the global
    return new Promise<T | undefined>((resolve, reject) => {
      const script = this.scripts.get(name);
      if (!script) {
        throw new Error(`Script ${name} not found`);
      }
      if (script.state === 'not-loaded') {
        //load script
        const scriptElement = this.document.createElement('script');
        scriptElement.type = 'text/javascript';
        scriptElement.src = script.src;
        scriptElement.onload = () => {
          script.state = 'loaded';
          if (script.globalName) {
            const globalName = script.globalName;
            setInterval(() => {
              script.getGlobalWhen(window[globalName], (element) => {
                script.state = 'ready';
                resolve(element as T);
              });
            }, 100);
          } else {
            resolve(undefined);
          }
        };
        scriptElement.onerror = () => {
          script.state = 'error';
          reject(script);
        };
        this.document
          .getElementsByTagName('head')[0]
          .appendChild(scriptElement);
      } else {
        if (script.globalName) {
          resolve(window[script.globalName] as T);
        } else {
          resolve(undefined);
        }
      }
    });
  }

  registerScript<T>(
    scriptName: string,
    scriptURL: string,
    globalName: string,
    getGlobalWhen: Script<T>['getGlobalWhen']
  ) {
    const script: Script<T> = {
      state: 'not-loaded',
      src: scriptURL,
      globalName: globalName,
      getGlobalWhen,
    };
    this.scripts.set(scriptName, script as Script<unknown>);
  }
}
