import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent, ButtonComponent, LogoComponent } from '@otwld/ui';
import { ThemeService } from '../../services/theme/theme.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'otwld-navbar',
  standalone: true,
  imports: [CommonModule, LogoComponent, ButtonComponent, FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent extends BaseComponent {
  faBars = faBars;

  constructor(private readonly themeService: ThemeService) {
    super();
  }

  promptThemeSwitcher = () => this.themeService.promptThemeSwitcher();
}
