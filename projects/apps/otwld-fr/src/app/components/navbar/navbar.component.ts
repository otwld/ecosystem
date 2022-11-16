import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent, ButtonFillComponent, LogoComponent } from '@otwld/ui';
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'otwld-navbar',
  standalone: true,
  imports: [
    CommonModule,
    ButtonFillComponent,
    ButtonFillComponent,
    ButtonFillComponent,
    LogoComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent extends BaseComponent {

  constructor(
    private readonly themeService: ThemeService,
  ) {
    super();
  }
  changeTheme() {
    const allowedThemes = ['default', 'dark', 'aqua', 'light', 'corporate', 'valentine', 'cyberpunk', 'synthwave', 'retro', 'forest', 'luxury'];
    const themeName = prompt(`Type of of the following themes: ${allowedThemes.join(', ')}`);
    if (themeName && allowedThemes.includes(themeName)) {
      this.themeService.changeTheme(themeName);
    }
  }
}
