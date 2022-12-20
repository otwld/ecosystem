import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  forwardRef,
  Host,
  HostBinding,
  Input,
  NgModule,
  QueryList,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { BaseComponent } from '../base.component';
import {
  AnimationClass,
  TabActiveClass,
  TabItemStyleClass,
  TabSizeClass,
  TabStyleClass,
} from '../../types';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'ui-tab-outlet',
  standalone: true,
  imports: [RouterLink, NgTemplateOutlet],
  template: `
    <ng-container [ngTemplateOutlet]="templateRef ?? null"></ng-container>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabOutletComponent extends BaseComponent {
  private animation: AnimationClass | undefined;

  @HostBinding('class') override class = this.construct(
    () => [],
    () => [this.animation]
  );

  private _templateRef: TemplateRef<unknown> | undefined;

  get templateRef(): TemplateRef<unknown> | undefined {
    return this._templateRef;
  }

  @Input()
  set templateRef(value: TemplateRef<unknown> | undefined) {
    this.animation = 'animate-slide-in-fade-left';
    this._templateRef = value;
    this.ngOnChanges({});
    setTimeout(() => {
      this.animation = undefined;
      this.cdr.detectChanges();
      this.cdr.markForCheck();
      this.ngOnChanges({});
    }, 1000);
  }
}

@Component({
  selector: 'ui-tabs',
  standalone: true,
  imports: [NgTemplateOutlet],
  template: ` <ng-content select="ui-tab"></ng-content> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent extends BaseComponent implements AfterContentInit {
  @Input() tabStyle: TabStyleClass | undefined;
  @Input() tabSize: TabSizeClass | undefined;

  @Input() tabOutletRef: TabOutletComponent | undefined;

  @ContentChildren(forwardRef(() => TabComponent))
  tabRefs!: QueryList<TabComponent>;

  @HostBinding() override class = this.construct(
    () => ['tabs', 'justify-center', 'md:justify-start'],
    () => [this.tabStyle, this.tabSize]
  );

  ngAfterContentInit() {
    this.tabRefs.forEach((tab) => {
      if (tab.title && tab.active === 'tab-active' && tab.templateRef) {
        this.selectTab(tab.title, tab.templateRef);
      }
    });
  }

  selectTab(tabTitle: string, templateRef: TemplateRef<unknown>) {
    this.tabRefs.forEach((tab) => {
      tab.active = tab.title === tabTitle ? 'tab-active' : undefined;
      tab.cdr.markForCheck();
      tab.ngOnChanges({});
    });
    if (this.tabOutletRef) {
      this.tabOutletRef.templateRef = templateRef;
      this.tabOutletRef.cdr.markForCheck();
    }
    this.cdr.markForCheck();
  }
}

@Component({
  selector: 'ui-tab',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a
      class="{{ class }}"
      (click)="_parent.selectTab(title ?? '', templateRef)"
      [routerLink]="route ?? null"
    >
      {{ title }}
    </a>
    <ng-template #templateRef>
      <ng-content></ng-content>
    </ng-template>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent extends BaseComponent {
  @Input() route: string | undefined;
  @Input() active: TabActiveClass | undefined = undefined;
  @Input() tabStyle: TabItemStyleClass | undefined;
  @Input() title: string | undefined;
  @ViewChild('templateRef', { static: true }) templateRef:
    | TemplateRef<unknown>
    | undefined;

  override class = this.construct(
    () => ['tab'],
    () => [this.active, this.tabStyle]
  );

  constructor(@Host() public _parent: TabsComponent) {
    super();
  }
}

@NgModule({
  imports: [TabsComponent, TabComponent, TabOutletComponent],
  exports: [TabsComponent, TabComponent, TabOutletComponent],
})
export class TabsModule {}
