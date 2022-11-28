import { Directive, OnChanges, OnDestroy } from '@angular/core';
import { ThemeClassOrArray } from '../types/tailwind.types';
import { constructComponentClasses } from '../utils/tailwind.utils';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Directive()
export class BaseDirective
  implements OnChanges, OnDestroy
{
  class = '';

  ngOnChanges(): void {
    this.class = this.construct(this.componentBase, this.componentModifiers);
  }

  protected construct(
    componentBase: () => ThemeClassOrArray,
    componentModifiers: () => ThemeClassOrArray[]
  ) {
    this.componentBase = componentBase;
    this.componentModifiers = componentModifiers;
    return constructComponentClasses(
      this.componentBase(),
      this.componentModifiers()
    );
  }

  private componentBase: () => ThemeClassOrArray = () => [];

  private componentModifiers: () => ThemeClassOrArray[] = () => [];

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method,@typescript-eslint/no-empty-function
  ngOnDestroy(): void {}
}
