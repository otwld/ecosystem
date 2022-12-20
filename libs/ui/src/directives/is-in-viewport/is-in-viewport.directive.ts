import {
  AfterViewInit,
  ChangeDetectorRef,
  Directive,
  HostBinding,
  Input,
  ViewContainerRef,
} from '@angular/core';
import { isBrowser } from '@otwld/features';

@Directive({
  selector: '[uiIsInViewport]',
  standalone: true,
})
export class IsInViewportDirective implements AfterViewInit {
  private isBrowser = isBrowser();
  @Input()
  whenVisible: string[] = [];

  @Input() shouldRemoveClassesWhenNotIntersecting = false;

  @HostBinding('class') class: string[] = [];

  constructor(
    private vcRef: ViewContainerRef,
    private cdRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    if (this.isBrowser) {
      // TODO: Create a IntersectionObserverService.
      const observedElement = this.vcRef.element.nativeElement.parentElement;

      const observer = new IntersectionObserver(([entry]) => {
        this.applyOrRemoveClasses(entry.isIntersecting);
      });
      observer.observe(observedElement);
    } else {
      this.applyOrRemoveClasses(true);
    }
  }

  applyOrRemoveClasses(isIntersecting: boolean) {
    if (isIntersecting) {
      this.class = this.whenVisible;
    } else if (this.shouldRemoveClassesWhenNotIntersecting) {
      this.class = [];
    }
    this.cdRef.markForCheck();
  }
}
