import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base.component';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { LayoutService } from './layout.service';
import { OpacityClass } from '../../types/tailwind/utils/general.types';
import { isBrowser } from '@otwld/features';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'ui-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent extends BaseComponent {
  private isBrowser = isBrowser();

  get attrDataTheme(): string | undefined {
    return this._attrDataTheme;
  }

  @Input()
  set attrDataTheme(value: string | undefined) {
    this._attrDataTheme = value;
    if (this.isBrowser) {
      // TODO: Create a DocumentService
      document.body.setAttribute('data-theme', value || '');
    }
  }

  private _attrDataTheme: string | undefined;
  @Input() opacity: OpacityClass | undefined = 'opacity-100';
  @ViewChild('containerRef') containerRef: ElementRef<HTMLElement> | undefined;

  constructor(
    private readonly router: Router,
    private readonly layoutService: LayoutService
  ) {
    super();
    this.layoutService.shouldScrollTop$
      .pipe(untilDestroyed(this))
      .subscribe((scrollOffset) => {
        if (this.containerRef) {
          if (this.isBrowser) {
            this.containerRef.nativeElement.scrollTo({
              top: scrollOffset || 0,
            });
          }
        }
      });
  }
}
