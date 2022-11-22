import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { HeroClientComponent } from '../../sections/hero/hero-client/hero-client.component';
import { ServicesComponent } from '../../sections/services/services.component';
import { AboutComponent } from '../../sections/about/about.component';
import { BrandsComponent } from '../../sections/brands/brands.component';
import { TeamsComponent } from '../../sections/teams/teams.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { PortfolioComponent } from '../../sections/portfolio/portfolio.component';
import { SimulatorComponent } from '../../sections/simulator/simulator.component';

@Component({
  selector: 'otwld-page-clients',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroClientComponent,
    ServicesComponent,
    AboutComponent,
    BrandsComponent,
    TeamsComponent,
    FooterComponent,
    PortfolioComponent,
    SimulatorComponent,
  ],
  templateUrl: './page-clients.component.html',
  styleUrls: ['./page-clients.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageClientsComponent {}
