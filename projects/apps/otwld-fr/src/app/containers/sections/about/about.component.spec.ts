import { AboutComponent } from './about.component';
import { MockBuilder, MockRender } from 'ng-mocks';
import { MatomoModule } from '@otwld/features';
import { RouterTestingModule } from '@angular/router/testing';

describe('AboutComponent', () => {
  beforeEach(async () => {
    return MockBuilder(AboutComponent)
      .mock(MatomoModule)
      .keep(RouterTestingModule);
  });

  it('should create', () => {
    const fixture = MockRender(AboutComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
