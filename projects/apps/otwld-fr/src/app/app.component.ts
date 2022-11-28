import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SettingsRepository } from './state/settings.repository';
import { setProp } from '@ngneat/elf';
import { ThemeService } from './services/theme/theme.service';
import { DrawerService } from './services/drawer.service';

@Component({
  selector: 'otwld-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'otwld-fr';
  currentTheme$ = this.themeService.currentTheme$;

  drawerTemplate$ = this.drawerService.getTemplate$();
  drawerOpen$ = this.drawerService.onOpen$();
  drawerHasBeenClosed = () => this.drawerService.close();

  constructor(
    private readonly settingsRepository: SettingsRepository,
    private readonly themeService: ThemeService,
    private readonly drawerService: DrawerService
  ) {
    this.settingsRepository.store$.update(setProp('darkMode', true));
  }
}
