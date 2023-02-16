import { CardComponent } from './card.component';
import { MockBuilder, MockRender } from 'ng-mocks';
import { card, cardComponent } from '../../types/tailwind.types';

describe('CardComponent', () => {
  beforeEach(async () => {
    return MockBuilder(CardComponent).mock(card).mock(cardComponent);
  });

  it('should create', () => {
    const fixture = MockRender(CardComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
