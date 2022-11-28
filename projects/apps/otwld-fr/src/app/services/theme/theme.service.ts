import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _currentTheme$ = new BehaviorSubject(
    localStorage.getItem('SELECTED_THEME') || 'default'
  );

  currentTheme$ = this._currentTheme$.asObservable();
  allowedThemes = [
    'default',
    'dark',
    'aqua',
    'light',
    'corporate',
    'valentine',
    'cyberpunk',
    'synthwave',
    'retro',
    'forest',
    'luxury',
  ]

  setTheme(themeName: string) {
    this._currentTheme$.next(themeName);
    localStorage.setItem('SELECTED_THEME', themeName);
  }

  promptThemeSwitcher() {
    const themeName = prompt(
      `Type of of the following themes: ${this.allowedThemes.join(', ')}`
    );
    if (themeName && this.allowedThemes.includes(themeName)) {
      this.setTheme(themeName);
    }
  }
}
