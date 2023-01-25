import { Injectable } from '@angular/core';
import { fromEvent, startWith, Subject, tap, throttleTime } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  private readonly _resizeSubject$ = new Subject<void>();
  private readonly _recalculateOnResize$ = fromEvent(window, 'resize').pipe(
    startWith(null),
    throttleTime(100),
    tap((_) => this._resizeSubject$.next()),
    tap((_) => this._calculateDevice()),
    untilDestroyed(this)
  );

  constructor() {
    // TODO: Use DI Token to start or not the listeners.
    // eslint-disable-next-line no-constant-condition
    if (true) {
      this._recalculateOnResize$.subscribe();
    } else {
      this._calculateDevice();
    }
  }

  // TODO: Use DI Token for the 3 breakpoints values.
  private _isMobile: boolean | undefined;

  get isMobile(): boolean {
    return this._isMobile ?? false;
  }

  set isMobile(value: boolean) {
    this._isMobile = value;
  }

  private _isTablet: boolean | undefined;

  get isTablet(): boolean {
    return this._isTablet ?? false;
  }

  set isTablet(value: boolean) {
    this._isTablet = value;
  }

  private _isDesktop: boolean | undefined;

  get isDesktop(): boolean {
    return this._isDesktop ?? false;
  }

  set isDesktop(value: boolean) {
    this._isDesktop = value;
  }

  resized$() {
    return this._recalculateOnResize$;
  }

  private _calculateDevice() {
    this._isMobile = matchMedia('(max-width: 540px)').matches;
    this._isTablet = matchMedia(
      '(min-width: 540px) and (max-width: 840px)'
    ).matches;
    this._isDesktop = matchMedia('(min-width: 840px)').matches;
  }
}
