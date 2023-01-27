import { PortfolioComponent } from './portfolio.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBuilder, MockRender } from 'ng-mocks';
import { MatomoModule } from '@otwld/features';
import {ProjectsService} from '@ecosystem/shared-models';

describe('PortfolioComponent', () => {
  beforeEach(async () => {
    return MockBuilder(PortfolioComponent)
      .mock(MatomoModule)
      .mock(ProjectsService)
      .keep(RouterTestingModule);
  });

  it('should create', () => {
    const fixture = MockRender(PortfolioComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
