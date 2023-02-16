import {
  ChangeDetectionStrategy,
  Component,
  inject,
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
  provideComponentConfiguration,
  SmartComponent,
  SwapComponent,
  SwapOffComponent,
  SwapOnComponent,
  tw,
} from '@otwld/ui';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink, RouterLinkWithHref } from '@angular/router';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';
import { LangSwitcherComponent } from '../lang-switcher/lang-switcher.component';
import { DrawerService } from '../../services/drawer.service';
import { TranslocoModule } from '@ngneat/transloco';

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
    TranslocoModule,
    RouterLink,
  ],
  templateUrl: './navbar-default.component.html',
  styleUrls: ['./navbar-default.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    provideComponentConfiguration({
      name: 'smart-navbar-default',
      type: 'smart',
    }),
  ],
})
export class NavbarDefaultComponent extends SmartComponent implements OnInit {
  private readonly _drawerService = inject(DrawerService);
  @ViewChild('drawerContentRef', { static: true }) drawerContentRef:
    | TemplateRef<HTMLElement>
    | undefined;

  ngOnInit(): void {
    if (this.drawerContentRef) {
      this._drawerService.setTemplate({
        template: this.drawerContentRef,
        context: {
          width: tw('w-64'),
        },
      });
      // this.drawerService.open();
    }
  }

  openDrawer() {
    this._drawerService.open();
  }
}
