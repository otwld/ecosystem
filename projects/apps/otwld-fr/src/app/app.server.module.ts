import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { DateFnsConfigurationService } from 'ngx-date-fns';
import { enUS } from 'date-fns/locale';

const dateFnsConfig = new DateFnsConfigurationService();
dateFnsConfig.setLocale(enUS);
@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
