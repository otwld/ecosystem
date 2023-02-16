import {
  Observable,
  ObservableInput,
  ObservedValueOf,
  of,
  OperatorFunction,
  switchMap,
  tap,
} from 'rxjs';
import { makeStateKey, TransferState } from '@angular/platform-browser';

export function runTransferStateOperation<T, O extends ObservableInput<any>>(
  transferState: TransferState,
  operationName: (value: T) => string | 'skip-transfer-state',
  operation: (value: T) => O
): OperatorFunction<T, ObservedValueOf<O>> {
  return (source$: Observable<T>) =>
    source$.pipe(
      switchMap((a) => {
        const key = operationName(a);
        if (key === 'skip-transfer-state') {
          return operation(a);
        }
        const stateValue = getTransferStateValue(
          transferState,
          operationName(a)
        );
        return stateValue
          ? of(stateValue)
          : (operation(a) as Observable<any>).pipe(
              tap((value) =>
                transferState.set(makeStateKey(operationName(a)), value)
              )
            );
      })
    );
}

export function getTransferStateValue<T>(
  transferState: TransferState,
  operationName: string
): T | null {
  return transferState.get(makeStateKey<T>(operationName), null);
}

export const createTransferStateOperation = <T>(
  transferState: TransferState,
  operationName: string,
  operation$: Observable<T>
) => {
  const stateValue = getTransferStateValue<T>(transferState, operationName);
  return stateValue
    ? of(stateValue)
    : operation$.pipe(
        tap((value) => transferState.set(makeStateKey<T>(operationName), value))
      );
};
