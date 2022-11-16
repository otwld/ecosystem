import { Component } from '@angular/core';
import { SettingsRepository } from './state/settings.repository';
import { setProp } from '@ngneat/elf';
import { ThemeService } from './services/theme/theme.service';

@Component({
  selector: 'otwld-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'otwld-fr';
  currentTheme$ = this.themeService.currentTheme$;

  constructor(
    private readonly settingsRepository: SettingsRepository,
    private readonly themeService: ThemeService
  ) {
    this.settingsRepository.store$.update(setProp('darkMode', true));
  }
}
