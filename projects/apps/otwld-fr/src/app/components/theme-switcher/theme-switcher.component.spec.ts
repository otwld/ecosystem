import { ThemeSwitcherComponent } from './theme-switcher.component';
import { MockBuilder, MockRender } from 'ng-mocks';
import { MatomoModule } from '@otwld/features';

describe('ThemeSwitcherComponent', () => {
  beforeEach(async () => {
    return MockBuilder(ThemeSwitcherComponent).mock(MatomoModule);
  });

  it('should create', () => {
    const fixture = MockRender(ThemeSwitcherComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
