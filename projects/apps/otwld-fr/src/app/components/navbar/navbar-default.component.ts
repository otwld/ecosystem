import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonComponent,
  DropdownComponent,
  DropdownContentComponent,
  DropdownTriggerComponent,
  LogoComponent,
  MenuDirective,
  MenuItemDirective,
  NavbarComponent as _NavbarComponent,
  NavbarItemComponent,
  SwapComponent,
  SwapOffComponent,
  SwapOnComponent,
} from '@otwld/ui';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLinkWithHref } from '@angular/router';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';
import { LangSwitcherComponent } from '../lang-switcher/lang-switcher.component';

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
    SwapComponent,
    SwapOnComponent,
    SwapOffComponent,
    DropdownComponent,
    DropdownContentComponent,
    DropdownTriggerComponent,
    MenuDirective,
    MenuItemDirective,
    ThemeSwitcherComponent,
    LangSwitcherComponent,
  ],
  templateUrl: './navbar-default.component.html',
  styleUrls: ['./navbar-default.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class NavbarDefaultComponent {}
