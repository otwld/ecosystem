import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { PageClientsComponent } from './containers/pages/page-clients/page-clients.component';
import { AppRoutingModule } from './app.routing';
import { NavbarDefaultComponent } from './components/navbar/navbar-default.component';
import { LayoutComponent } from '@otwld/ui';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NavbarDefaultComponent,
    FontAwesomeModule,
    FooterComponent,
    PageClientsComponent,
    AppRoutingModule,
    LayoutComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
