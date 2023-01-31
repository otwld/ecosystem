import { inject, Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '@otwld/ui';

@Injectable()
export class HttpLanguageInterceptor implements HttpInterceptor {
  private readonly localStorage = inject(LocalStorageService);
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Language: this.localStorage.getItem('lang') || 'en',
      },
    });
    return next.handle(request);
  }
}
