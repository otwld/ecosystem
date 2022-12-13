import { ClientsCarouselComponent } from './clients-carousel.component';
import { MockBuilder, MockRender } from 'ng-mocks';
import { MatomoModule } from '@otwld/features';
import { RouterTestingModule } from '@angular/router/testing';

describe('BrandCarouselComponent', () => {
  beforeEach(async () => {
    return MockBuilder(ClientsCarouselComponent)
      .mock(MatomoModule)
      .keep(RouterTestingModule);
  });

  it('should create', () => {
    const fixture = MockRender(ClientsCarouselComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
