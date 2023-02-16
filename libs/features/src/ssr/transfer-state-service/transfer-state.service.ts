import { Injectable } from "@angular/core";
import { makeStateKey, StateKey, TransferState } from "@angular/platform-browser";

/**
 * Provide this service at component level.
 *
 * It will allow you to get data from TransferState (ie: SSR).
 */
@Injectable(
  {
    providedIn: 'root'
  }
)
export class TransferStateService extends TransferState {
  private readonly keys: Record<string, StateKey<unknown>> = {};
  createState<T>(state: string) {
    const key = makeStateKey<T>(state);
    this.keys[state] = key;
    return key;
  }

  getState<T>(state: string) {
    return this.keys[state] as T;
  }
}
