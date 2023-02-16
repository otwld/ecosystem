import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import {
  Breadcrumb,
  BreadcrumbsComponent,
} from '../../components/breadcrumbs/breadcrumbs.component';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbsService {
  private addBreadcrumb$ = new ReplaySubject<BreadcrumbsComponent['items'][0]>(
    1
  );

  onBreadcrumbAdd$() {
    return this.addBreadcrumb$.asObservable();
  }

  addBreadcrumb(breadcrumb: Breadcrumb) {
    return this.addBreadcrumb$.next(breadcrumb);
  }
}
