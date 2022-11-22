import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BaseComponent,
  ButtonComponent,
  ContainerClass,
  LogoComponent,
} from '@otwld/ui';
import { ThemeService } from '../../services/theme/theme.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'otwld-navbar',
  standalone: true,
  imports: [
    CommonModule,
    LogoComponent,
    ButtonComponent,
    FontAwesomeModule,
    RouterLinkWithHref,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent extends BaseComponent {
  @Input() container: ContainerClass | undefined = undefined;
  faBars = faBars;
  @HostBinding('class') hostClasses = this.construct(
    () => [
      'flex',
      'w-full',
      'border-b',
      'border-b-neutral',
      'bg-neutral',
      'text-neutral-content',
    ],
    () => [this.container ? [] : ['pr-8', 'pl-4']]
  );

  constructor(private readonly themeService: ThemeService) {
    super();
  }

  promptThemeSwitcher = () => this.themeService.promptThemeSwitcher();
}
