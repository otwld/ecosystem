import { ServicesComponent } from './services.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBuilder, MockRender } from 'ng-mocks';
import { MatomoModule } from '@otwld/features';

describe('ServicesComponent', () => {
  beforeEach(async () => {
    return MockBuilder(ServicesComponent)
      .mock(MatomoModule)
      .keep(RouterTestingModule);
  });

  it('should create', () => {
    const fixture = MockRender(ServicesComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
