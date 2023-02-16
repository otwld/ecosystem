import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Breadcrumb,
  BreadcrumbsComponent,
  BreadcrumbsService,
  HeroComponent,
  HeroContentComponent,
} from '@otwld/ui';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
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
  items$: Observable<Breadcrumb[]> = this.breadcrumbsService
    .onBreadcrumbAdd$()
    .pipe(
      map((newBreadcrumb) => [newBreadcrumb])
    );
  title$ = this.activatedRoute.data.pipe(
    map((data) => data['titleTranslationKey'])
  );

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly breadcrumbsService: BreadcrumbsService
  ) {
  }
}
