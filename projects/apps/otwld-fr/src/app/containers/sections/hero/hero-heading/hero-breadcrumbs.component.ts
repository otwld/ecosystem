import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BreadcrumbsComponent,
  HeroComponent,
  HeroContentComponent,
} from '@otwld/ui';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { map, Observable, of, switchMap } from 'rxjs';
import { RouteData } from '../../../../utils/router.utils';

@Component({
  selector: 'otwld-hero-breadcrumbs',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    BreadcrumbsComponent,
    HeroContentComponent,
  ],
  templateUrl: './hero-breadcrumbs.component.html',
  styleUrls: ['./hero-breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroBreadcrumbsComponent {
  items$: Observable<BreadcrumbsComponent['items']> =
    this.activatedRoute.data.pipe(
      switchMap((data) =>
        this.addBreadcrumb$(
          data['titleTranslationKey'],
          [],
          this.activatedRoute.url
        )
      ),
      switchMap((breadcrumbs) =>
        this.activatedRoute.parent
          ? this.activatedRoute.parent.data.pipe(
              switchMap((data) =>
                this.addBreadcrumb$(
                  data['heroHeading'],
                  breadcrumbs,
                  this.activatedRoute.parent?.url
                )
              )
            )
          : of(breadcrumbs)
      )
    );
  title$ = this.activatedRoute.data.pipe(map((data) => data['title']));

  constructor(private readonly activatedRoute: ActivatedRoute) {}

  private addBreadcrumb$(
    item: RouteData['titleTranslationKey'],
    breadcrumbs: BreadcrumbsComponent['items'],
    url$?: Observable<UrlSegment[]>
  ): Observable<BreadcrumbsComponent['items']> {
    if (item && url$) {
      return url$.pipe(
        map((url) => '/' + url[url.length - 1].path),
        map((url) => [
          { labelTranslationKey: item, url },
          ...breadcrumbs.map((e) => ({ ...e, url: `${url}/${e.url}` })),
        ])
      );
    } else {
      return of(breadcrumbs);
    }
  }
}
