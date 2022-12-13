import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroClientComponent } from '../../sections/hero/hero-client/hero-client.component';
import { ServicesComponent } from '../../sections/services/services.component';
import { AboutComponent } from '../../sections/about/about.component';
import { BrandsComponent } from '../../sections/brands/brands.component';
import { TeamsComponent } from '../../sections/teams/teams.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { PortfolioComponent } from '../../sections/portfolio/portfolio.component';
import { SimulatorComponent } from '../../sections/simulator/simulator.component';
import { NavbarDefaultComponent } from '../../../components/navbar/navbar-default.component';
import { TranslocoModule } from '@ngneat/transloco';
import { injectTrackEvent } from '@otwld/features';

@Component({
  selector: 'otwld-page-clients',
  standalone: true,
  imports: [
    CommonModule,
    NavbarDefaultComponent,
    HeroClientComponent,
    ServicesComponent,
    AboutComponent,
    BrandsComponent,
    TeamsComponent,
    FooterComponent,
    PortfolioComponent,
    SimulatorComponent,
    TranslocoModule,
  ],
  templateUrl: './page-clients.component.html',
  styleUrls: ['./page-clients.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageClientsComponent {

  private trackEvent = injectTrackEvent();

  openTawkTo() {
    this.trackEvent('CTA', 'CLICK', 'hero.cta', 0);
    (window as any).Tawk_API.maximize();
  }
}
