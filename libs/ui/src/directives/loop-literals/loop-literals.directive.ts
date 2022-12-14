import {
  Directive,
  ElementRef,
  HostBinding,
  inject,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslocoService } from '@ngneat/transloco';
import { interval, startWith, switchMap, tap } from 'rxjs';
import { AnimationClass } from '../../types/tailwind/animation.types';
import { whenLangLoadedOrChanged$ } from '@otwld/features';

@UntilDestroy()
@Directive({
  selector: '[uiLoopLiterals]',
  standalone: true,
})
export class LoopLiteralsDirective implements OnChanges {
  private translocoService = inject(TranslocoService);
  private renderer = inject(Renderer2);
  private elementRef = inject(ElementRef);
  private index = 0;
  private values = [];
  private whenLangLoadedOrChanged$ = whenLangLoadedOrChanged$();

  @Input() i18ArrayKey: string | undefined;
  @Input() interval = 3000;
  @Input() animation: AnimationClass = 'animate-slide-in-fade-top';
  @HostBinding('class') class = '';

  ngOnChanges(changes: SimpleChanges): void {
    this.whenLangLoadedOrChanged$
      .pipe(
        startWith(this.translocoService.getActiveLang()),
        tap(
          () =>
            (this.values = this.i18ArrayKey
              ? this.translocoService.translate(this.i18ArrayKey)
              : [])
        ),
        switchMap((_) =>
          interval(this.interval).pipe(
            startWith(() => 0),
            untilDestroyed(this)
          )
        )
      )
      .subscribe((lang) => {
        this.index = this.index >= this.values.length - 1 ? 0 : this.index + 1;
        this.renderer.addClass(this.elementRef.nativeElement, this.animation);
        setTimeout(
          () =>
            this.renderer.removeClass(
              this.elementRef.nativeElement,
              this.animation
            ),
          this.interval * 0.8
        );
        this.renderer.setProperty(
          this.elementRef.nativeElement,
          'innerText',
          this.values[this.index]
        );
      });
  }
}
