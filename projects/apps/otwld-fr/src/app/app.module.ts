import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TeamsComponent } from './components/teams/teams.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { BrandsComponent } from './components/brands/brands.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NavbarComponent, HeroComponent, ServicesComponent, FontAwesomeModule, TeamsComponent, FooterComponent, AboutComponent, BrandsComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
