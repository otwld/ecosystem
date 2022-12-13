import { PortfolioCarouselComponent } from './portfolio-carousel.component';
import { MockBuilder, MockRender } from 'ng-mocks';
import { MatomoModule } from '@otwld/features';
import { RouterTestingModule } from '@angular/router/testing';

describe('PortfolioCarouselComponent', () => {
  beforeEach(async () => {
    return MockBuilder(PortfolioCarouselComponent)
      .mock(MatomoModule)
      .keep(RouterTestingModule);
  });

  it('should create', () => {
    const fixture = MockRender(PortfolioCarouselComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
