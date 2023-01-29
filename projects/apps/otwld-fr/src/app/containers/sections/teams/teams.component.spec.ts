import { TeamsComponent } from './teams.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBuilder, MockRender } from 'ng-mocks';
import { MatomoModule } from '@otwld/features';
import {MembersService} from '@ecosystem/shared-models';

describe('TeamsComponent', () => {
  beforeEach(async () => {
    return MockBuilder(TeamsComponent)
      .mock(MembersService)
      .mock(MatomoModule)
      .keep(RouterTestingModule);
  });

  it('should create', () => {
    const fixture = MockRender(TeamsComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
