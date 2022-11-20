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

  setTheme(themeName: string) {
    this._currentTheme$.next(themeName);
    localStorage.setItem('SELECTED_THEME', themeName);
  }

  promptThemeSwitcher() {
    const allowedThemes = [
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
    ];
    const themeName = prompt(
      `Type of of the following themes: ${allowedThemes.join(', ')}`
    );
    if (themeName && allowedThemes.includes(themeName)) {
      this.setTheme(themeName);
    }
  }
}
