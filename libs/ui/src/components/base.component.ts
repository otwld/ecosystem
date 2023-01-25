import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { ThemeClassOrArray } from '../types/tailwind/theme.types';
import { constructComponentClasses } from '../utils/tailwind.utils';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { DeviceService } from '@otwld/features';

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

  elementRef: ElementRef<HTMLElement> = inject(ElementRef);
  cdr = inject(ChangeDetectorRef);

  private readonly device = inject(DeviceService);
  isMobile = this.device.isMobile;
  isTablet = this.device.isTablet;
  isDesktop = this.device.isDesktop;

  constructor() {
    // TODO: Create a stack of observables, that on any emission will markForCheck.
    this.device
      .resized$()
      .pipe(untilDestroyed(this))
      .subscribe(() => {
        this.cdr.markForCheck();
      });
  }

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
  set additionalClasses(value: T[] | null) {
    if (value) {
      this.inlineAdditionalClasses = value.join(' ');
    } else {
      this.inlineAdditionalClasses = '';
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.class = this.construct(this.componentBase, this.componentModifiers);
  }

  protected construct(
    componentBase: () => ThemeClassOrArray,
    componentModifiers: () => ThemeClassOrArray[] = () => []
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
