import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
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
  SwapOnComponent, tw
} from '@otwld/ui';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLinkWithHref } from '@angular/router';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';
import { LangSwitcherComponent } from '../lang-switcher/lang-switcher.component';
import { DrawerService } from '../../services/drawer.service';

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
export class NavbarDefaultComponent implements OnInit {
  @ViewChild('drawerContentRef', { static: true }) drawerContentRef:
    | TemplateRef<HTMLElement>
    | undefined;

  constructor(private readonly drawerService: DrawerService) {}

  ngOnInit(): void {
    if (this.drawerContentRef) {
      this.drawerService.setTemplate({
        template: this.drawerContentRef,
        context: {
          width: tw('w-64')
        },
      });
      // this.drawerService.open();
    }
  }

  openDrawer() {
    this.drawerService.open();
  }
}
