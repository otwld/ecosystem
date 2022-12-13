import { TeamsComponent } from './teams.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBuilder, MockRender } from 'ng-mocks';
import { MatomoModule } from '@otwld/features';

describe('TeamsComponent', () => {
  beforeEach(async () => {
    return MockBuilder(TeamsComponent)
      .mock(MatomoModule)
      .keep(RouterTestingModule);
  });

  it('should create', () => {
    const fixture = MockRender(TeamsComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
