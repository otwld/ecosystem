import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base.component';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, switchMap, tap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { OpacityClass } from '../../types/tailwind.types';
import { LayoutService } from './layout.service';

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
  @Input() attrDataTheme: string | undefined;
  @Input() opacity: OpacityClass | undefined = 'opacity-100';
  @ViewChild('containerRef') containerRef: ElementRef<HTMLElement> | undefined;


  constructor(private readonly router: Router,
              private readonly layoutService: LayoutService) {
    super();
    this.layoutService.shouldScrollTop$.pipe(untilDestroyed(this)).subscribe((scrollOffset) => {
      if (this.containerRef) {
        this.containerRef.nativeElement.scrollTo({ top:  scrollOffset || 0 });
      }
    })
  }
}
