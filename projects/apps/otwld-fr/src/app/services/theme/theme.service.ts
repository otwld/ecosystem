import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _currentTheme$ = new BehaviorSubject(localStorage.getItem('SELECTED_THEME') || 'default');

  currentTheme$ = this._currentTheme$.asObservable();

  changeTheme(themeName: string) {
    this._currentTheme$.next(themeName);
    localStorage.setItem('SELECTED_THEME', themeName);
  }
}
