import {
  AfterViewInit,
  ChangeDetectorRef,
  Directive,
  HostBinding,
  Input,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[uiIsInViewport]',
  standalone: true,
})
export class IsInViewportDirective implements AfterViewInit {
  @Input()
  classesToApply: string[] = [];

  @Input() shouldRemoveClassesWhenNotIntersecting = false;

  @HostBinding('class') class: string[] = [];

  constructor(
    private vcRef: ViewContainerRef,
    private cdRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    const observedElement = this.vcRef.element.nativeElement.parentElement;

    const observer = new IntersectionObserver(([entry]) => {
      this.applyOrRemoveClasses(entry.isIntersecting);
    });
    observer.observe(observedElement);
  }

  applyOrRemoveClasses(isIntersecting: boolean) {
    if (isIntersecting) {
      this.class = this.classesToApply;
    } else if (this.shouldRemoveClassesWhenNotIntersecting) {
      this.class = [];
    }
    this.cdRef.markForCheck();
  }
}
