import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { HeroComponent } from '../../sections/hero/hero.component';
import { ServicesComponent } from '../../sections/services/services.component';
import { AboutComponent } from '../../sections/about/about.component';
import { BrandsComponent } from '../../sections/brands/brands.component';
import { TeamsComponent } from '../../sections/teams/teams.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { PortfolioComponent } from '../../sections/portfolio/portfolio.component';
import { SimulatorComponent } from '../../sections/simulator/simulator.component';

@Component({
  selector: 'otwld-one-page-clients',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    AboutComponent,
    BrandsComponent,
    TeamsComponent,
    FooterComponent,
    PortfolioComponent,
    SimulatorComponent,
  ],
  templateUrl: './one-page-clients.component.html',
  styleUrls: ['./one-page-clients.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnePageClientsComponent {}
