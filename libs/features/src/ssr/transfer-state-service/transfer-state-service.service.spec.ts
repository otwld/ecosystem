import { TestBed } from '@angular/core/testing';

import { TransferStateService } from './transfer-state.service';

describe('TransferStateServiceService', () => {
  let service: TransferStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
