import { ChangeDetectionStrategy, Component, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent, ButtonComponent, SwapComponent, SwapOffComponent, SwapOnComponent } from '@otwld/ui';
import { TranslocoService } from '@ngneat/transloco';

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
  currentLang = this.translocoService.getActiveLang();

  switchLang() {
    if (this.currentLang === 'fr') {
      this.translocoService.setActiveLang('en');
    } else {
      this.translocoService.setActiveLang('fr');
    }
    this.currentLang = this.translocoService.getActiveLang();
    localStorage.setItem('lang', this.translocoService.getActiveLang());
  }
}
