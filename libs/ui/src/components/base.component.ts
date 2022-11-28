import {
  ChangeDetectorRef,
  Component,
  HostBinding, inject,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges
} from '@angular/core';
import { ThemeClassOrArray } from '../types/tailwind.types';
import { constructComponentClasses } from '../utils/tailwind.utils';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  standalone: true,
  template: '',
})
export class BaseComponent<T extends string = ''>
  implements OnChanges, OnDestroy
{
  class = '';
  inlineAdditionalClasses = '';
  @HostBinding('class.block')
  private isBlock = this.hostDisplay === 'block';
  @HostBinding('class.contents')
  private isContents = this.hostDisplay === 'contents';
  @HostBinding('class.inline')
  private isInline = this.hostDisplay === 'inline';
  @HostBinding('class.inline-block')
  private isInlineBlock = this.hostDisplay === 'inline-block';
  @HostBinding('class.flex')
  private isFlex = this.hostDisplay === 'flex';

  cdr = inject(ChangeDetectorRef);

  private _hostDisplay:
    | 'block'
    | 'inline-block'
    | 'inline'
    | 'contents'
    | 'flex' = 'block';

  @Input()
  get hostDisplay(): 'block' | 'inline-block' | 'inline' | 'contents' | 'flex' {
    return this._hostDisplay;
  }

  set hostDisplay(
    value: 'block' | 'inline-block' | 'inline' | 'contents' | 'flex'
  ) {
    this._hostDisplay = value;
    this.isBlock = value === 'block';
    this.isInlineBlock = value === 'inline-block';
    this.isInline = value === 'inline';
    this.isContents = value === 'contents';
    this.isFlex = value === 'flex';
  }

  @Input()
  set additionalClasses(value: T[]) {
    this.inlineAdditionalClasses = value.join(' ');
  }

  ngOnChanges(changes: SimpleChanges): void {
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
