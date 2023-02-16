import { Component, inject } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { AbstractComponent } from './abstract.component';
import { ActivatedRoute, Router } from '@angular/router';
import { shareReplay } from 'rxjs';
import { BreadcrumbsService } from '../../services/breadcrumbs/breadcrumbs.service';

@UntilDestroy()
@Component({
  standalone: true,
  template: '',
})
export class PageComponent extends AbstractComponent {
  _breadcrumbsService = inject(BreadcrumbsService);
  protected readonly _router = inject(Router);
  private readonly _activatedRoute = inject(ActivatedRoute);
  protected getParams$ = this._activatedRoute.params.pipe(
    shareReplay({ bufferSize: 1, refCount: true })
  );

  protected setBreadcrumb(title: string, url: string) {
    this._breadcrumbsService.addBreadcrumb({
      labelTranslationKey: title,
      url,
    });
  }
}
