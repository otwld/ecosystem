import {
  ChangeDetectionStrategy,
  Component,
  inject,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BaseComponent,
  ButtonComponent,
  LocalStorageService,
  SwapComponent,
  SwapOffComponent,
  SwapOnComponent,
} from '@otwld/ui';
import { TranslocoService } from '@ngneat/transloco';
import { injectTrackEvent } from '@otwld/features';

@Component({
  selector: 'otwld-lang-switcher',
  standalone: true,
  imports: [
    CommonModule,
    SwapOnComponent,
    SwapOffComponent,
    SwapComponent,
    ButtonComponent,
  ],
  templateUrl: './lang-switcher.component.html',
  styleUrls: ['./lang-switcher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LangSwitcherComponent extends BaseComponent {
  @ViewChild(SwapComponent, { static: true }) swapComponent:
    | SwapComponent
    | undefined;

  private readonly translocoService = inject(TranslocoService);
  private readonly localStorageService = inject(LocalStorageService);
  currentLang = this.translocoService.getActiveLang();
  trackEvent = injectTrackEvent();

  constructor() {
    super();
  }

  switchLang() {
    if (this.currentLang === 'fr') {
      this.translocoService.setActiveLang('en');
    } else {
      this.translocoService.setActiveLang('fr');
    }
    this.currentLang = this.translocoService.getActiveLang();
    this.trackEvent('LangSwitcher', 'Click', this.currentLang);
    this.localStorageService.setItem('lang', this.translocoService.getActiveLang());
  }
}
