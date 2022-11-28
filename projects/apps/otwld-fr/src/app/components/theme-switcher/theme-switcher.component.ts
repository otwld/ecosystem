import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonComponent,
  DropdownComponent, DropdownContentComponent,
  DropdownTriggerComponent,
  MenuDirective,
  MenuItemDirective
} from '@otwld/ui';
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'otwld-theme-switcher',
  standalone: true,
  imports: [
    CommonModule,
    DropdownComponent,
    DropdownTriggerComponent,
    DropdownContentComponent,
    ButtonComponent,
    MenuItemDirective,
    MenuDirective,
  ],
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSwitcherComponent  {
  allowedThemes = this.themeService.allowedThemes;
  currentTheme$ = this.themeService.currentTheme$;

  constructor(private readonly themeService: ThemeService) {}

  selectTheme(item: string) {
    this.themeService.setTheme(item);
  }
}