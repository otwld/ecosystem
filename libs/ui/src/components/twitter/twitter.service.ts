import { inject, Injectable } from '@angular/core';
import { DynamicScriptLoaderService, isBrowser } from '@otwld/features';
import { BehaviorSubject } from 'rxjs';

export interface TwitterWidget {
  widgets: {
    load: (element: HTMLElement) => void;
    createTweet: (tweetID: string, element: HTMLElement) => void;
    createTweetEmbed: (tweetID: string, element: HTMLElement) => void;
  };
}

@Injectable({
  providedIn: 'root',
})
export class TwitterService {
  private scriptLoaderService = inject(DynamicScriptLoaderService);
  private _scriptLoaded$ = new BehaviorSubject(false);
  private _twitterWidget: TwitterWidget | undefined;
  private isBrowser = isBrowser();

  constructor() {
    if (this.isBrowser) {
      this.scriptLoaderService.registerScript<TwitterWidget>(
        'twitter',
        'https://platform.twitter.com/widgets.js',
        'twttr',
        (e) => e
      );
      this.scriptLoaderService.load<TwitterWidget>('twitter').then((twttr) => {
        this._twitterWidget = twttr;
        this._scriptLoaded$.next(true);
      });
    }
  }

  scriptLoaded$() {
    return this._scriptLoaded$.asObservable();
  }

  widgets() {
    if (!this._twitterWidget) {
      throw new Error('Twitter widget not loaded');
    }
    return this._twitterWidget.widgets;
  }
}
