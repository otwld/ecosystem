import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

export interface TemplateAndContext {
  template: TemplateRef<unknown>;
  context: Record<string, unknown>;
}

@Injectable(
  {
    providedIn: 'root'
  }
)
export class DrawerService {
  private template$ = new Subject<TemplateAndContext>();
  private isOpen$ = new BehaviorSubject(false);

  close() {
    this.isOpen$.next(false);
  }

  open() {
    this.isOpen$.next(true);
  }

  onOpen$(): Observable<boolean> {
    return this.isOpen$.asObservable();
  }

  getTemplate$(): Observable<TemplateAndContext> {
    return this.template$.asObservable();
  }

  setTemplate(template: TemplateAndContext) {
    this.template$.next(template);
  }
}
