import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
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
  currentTheme$ = inject(ThemeService).currentTheme$;
  private readonly drawerService = inject(DrawerService);
  protected drawerTemplate$ = this.drawerService.getTemplate$();
  protected drawerOpen$ = this.drawerService.onOpen$();
  protected drawerHasBeenClosed = () => this.drawerService.close();
}
