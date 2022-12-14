import { LoopLiteralsDirective } from './loop-literals.directive';
import { MockDirective } from 'ng-mocks';

describe('LoopLiteralsDirective', () => {
  it('should create an instance', () => {
    // TODO: Ce composant doit-il porté TranslocoService ?
    const directive = MockDirective(LoopLiteralsDirective);
    expect(directive).toBeTruthy();
  });
});
