import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  inject,
} from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import {
  createTransferStateOperation,
  isBrowser,
  runTransferStateOperation,
} from '@otwld/features';
import { Observable, ObservableInput } from 'rxjs';
import { TransferState } from '@angular/platform-browser';
import { COMPONENT_CONFIGURATION } from '../tokens/component-configuration.token';

@UntilDestroy()
@Component({
  standalone: true,
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbstractComponent<T = null> {
  classes: string | undefined;
  /**
   * Whether the Angular application is being rendered in the browser.
   */
  isBrowser = isBrowser();
  /**
   * Whether the Angular application is being rendered in the Server.
   */
  isServer = !this.isBrowser;
  @HostBinding('class.block') block = true;
  private readonly _configuration = inject(COMPONENT_CONFIGURATION);
  private readonly _transferState = inject(TransferState);

  protected createTransferStateOperation = <T>(
    operationName: string,
    operation$: Observable<T>
  ) =>
    createTransferStateOperation(
      this._transferState,
      operationName,
      operation$
    );
  protected runTransferStateOperation = <T, O extends ObservableInput<any>>(
    operationName: (value: T) => string | 'skip-transfer-state',
    operation$: (value: T) => O
  ) =>
    runTransferStateOperation<T, O>(
      this._transferState,
      (value: T) =>
        operationName(value) !== 'skip-transfer-state'
          ? `${this._configuration.name}-${operationName(value)}`
          : 'skip-transfer-state',
      operation$
    );
}
