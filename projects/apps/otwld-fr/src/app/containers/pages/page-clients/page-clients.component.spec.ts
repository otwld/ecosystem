import { PageClientsComponent } from './page-clients.component';
import { MockBuilder, MockRender } from 'ng-mocks';
import { MatomoModule } from '@otwld/features';
import { RouterTestingModule } from '@angular/router/testing';

describe('OnePageClientsComponent', () => {
  beforeEach(async () => {
    return MockBuilder(PageClientsComponent)
      .mock(MatomoModule)
      .keep(RouterTestingModule);
  });

  it('should create', () => {
    const fixture = MockRender(PageClientsComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
