import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base.component';
import { Icon } from '@fortawesome/fontawesome-svg-core';
import { RouterLink, RouterLinkWithHref } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslocoModule } from '@ngneat/transloco';

export interface Breadcrumb {
  labelTranslationKey: string;
  url?: string;
  icon?: Icon;
}

@Component({
  selector: 'ui-breadcrumbs',
  standalone: true,
  imports: [
    CommonModule,
    RouterLinkWithHref,
    FontAwesomeModule,
    RouterLink,
    TranslocoModule,
  ],
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent extends BaseComponent {
  @HostBinding('class') override class = this.construct(
    () => ['breadcrumbs'],
    () => []
  );

  @Input() items: Breadcrumb[] = [];
}
