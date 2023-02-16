import { ServicesComponent } from './services.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBuilder, MockRender } from 'ng-mocks';
import { MatomoModule } from '@otwld/features';
import { ServicesService } from '@ecosystem/shared-models';
import { of } from 'rxjs';

describe('ServicesComponent', () => {
  beforeEach(async () => {
    return MockBuilder(ServicesComponent)
      .mock(MatomoModule)
      .mock(ServicesService, {
        getAllServices$: () => of([]),
      })
      .keep(RouterTestingModule);
  });

  it('should create', () => {
    const fixture = MockRender(ServicesComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
