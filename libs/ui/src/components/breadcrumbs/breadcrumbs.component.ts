import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '@otwld/ui';
import { Icon } from '@fortawesome/fontawesome-svg-core';
import { RouterLinkWithHref } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'ui-breadcrumbs',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, FontAwesomeModule],
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent extends BaseComponent {
  @HostBinding('class') override class = this.construct(
    () => ['breadcrumbs'],
    () => []
  );

  @Input() items: { labelTranslationKey: string; url?: string; icon?: Icon }[] =
    [];
}
