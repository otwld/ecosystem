import { Component } from '@angular/core';
import { SettingsRepository } from './state/settings.repository';
import { setProp } from '@ngneat/elf';

@Component({
  selector: 'otwld-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'otwld-fr';

  constructor(
    private readonly settingsRepository: SettingsRepository,
  ) {
    this.settingsRepository.store$.update(
      setProp('darkMode', true),
    );
  }

}
