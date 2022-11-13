import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { OnePageClientsComponent } from './containers/pages/one-page-clients/one-page-clients.component';
import { ButtonComponent } from '@otwld/ui';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NavbarComponent, FontAwesomeModule, FooterComponent, OnePageClientsComponent, ButtonComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
