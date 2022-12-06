import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from '@otwld/ui';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private localStorageService = inject(LocalStorageService);
  private _currentTheme$ = new BehaviorSubject(
    this.localStorageService.getItem('SELECTED_THEME') || 'default'
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
    this.localStorageService.setItem('SELECTED_THEME', themeName);
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
