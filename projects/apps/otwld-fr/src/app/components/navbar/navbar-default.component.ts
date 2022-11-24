import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonComponent,
  LogoComponent,
  NavbarComponent as _NavbarComponent,
  NavbarItemComponent,
} from '@otwld/ui';
import { ThemeService } from '../../services/theme/theme.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'otwld-navbar-default',
  standalone: true,
  imports: [
    CommonModule,
    LogoComponent,
    ButtonComponent,
    FontAwesomeModule,
    RouterLinkWithHref,
    NavbarItemComponent,
    _NavbarComponent,
  ],
  templateUrl: './navbar-default.component.html',
  styleUrls: ['./navbar-default.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarDefaultComponent {
  faBars = faBars;

  constructor(private readonly themeService: ThemeService) {}

  promptThemeSwitcher = () => this.themeService.promptThemeSwitcher();
}
