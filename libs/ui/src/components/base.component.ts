import { Component, HostBinding, Input } from '@angular/core';
import { AdditionalClasses } from '../utils/tailwind.utils';

@Component({
  standalone: true,
  template: '',
})
export class BaseComponent<T extends string = ''> {
  @Input()
  set additionalClasses(value: AdditionalClasses<T>[]) {
    this.inlineAdditionalClasses = value.join(' ');
  }
  protected inlineAdditionalClasses = '';

  private _display: 'block' | 'inline-block' | 'inline' | 'contents' | 'flex' =
    'block';
  @Input()
  get display(): 'block' | 'inline-block' | 'inline' | 'contents' | 'flex' {
    return this._display;
  }
  set display(
    value: 'block' | 'inline-block' | 'inline' | 'contents' | 'flex'
  ) {
    this._display = value;
    this.isBlock = value === 'block';
    this.isInlineBlock = value === 'inline-block';
    this.isInline = value === 'inline';
    this.isContents = value === 'contents';
    this.isFlex = value === 'flex';
  }

  @HostBinding('class.block')
  private isBlock = this.display === 'block';

  @HostBinding('class.contents')
  private isContents = this.display === 'contents';

  @HostBinding('class.inline')
  private isInline = this.display === 'inline';

  @HostBinding('class.inline-block')
  private isInlineBlock = this.display === 'inline-block';

  @HostBinding('class.flex')
  private isFlex = this.display === 'flex';
}
