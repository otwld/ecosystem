import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { PageClientsComponent } from './containers/pages/page-clients/page-clients.component';
import { AppRoutingModule } from './app.routing';
import { NavbarDefaultComponent } from './components/navbar/navbar-default.component';
import { LayoutComponent } from '@otwld/ui';
import { DateFnsConfigurationService, DateFnsModule } from 'ngx-date-fns';
import { fr, enUS } from "date-fns/locale";
import { OverlayModule } from '@angular/cdk/overlay';
import { DialogModule } from '@angular/cdk/dialog';

const dateFnsConfig = new DateFnsConfigurationService();
dateFnsConfig.setLocale(enUS);

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
    DateFnsModule.forRoot(),
    DialogModule,
  ],
  providers: [
    { provide: DateFnsConfigurationService, useValue: dateFnsConfig } // <-- All pipes in French by default
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
