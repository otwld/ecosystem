import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Breadcrumb,
  BreadcrumbsComponent,
  HeroComponent,
  HeroContentComponent
} from '@otwld/ui';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { map, Observable, of, switchMap, tap } from 'rxjs';
import { RouteData } from '../../../../utils/router.utils';
import { BreadcrumbsService } from '../../../../services/breadcrumbs/breadcrumbs.service';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'otwld-hero-breadcrumbs',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    BreadcrumbsComponent,
    HeroContentComponent,
    TranslocoModule,
  ],
  templateUrl: './hero-breadcrumbs.component.html',
  styleUrls: ['./hero-breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroBreadcrumbsComponent {
  items$: Observable<Breadcrumb[]> = this.activatedRoute.data.pipe(
    switchMap((breadcrumbs) =>
      this.breadcrumbsService
        .onBreadcrumbAdd$()
        .pipe(map((newBreadcrumb) => [newBreadcrumb]))
    )
  );
  title$ = this.activatedRoute.data.pipe(
    map((data) => data['titleTranslationKey'])
  );

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly breadcrumbsService: BreadcrumbsService
  ) {}

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
