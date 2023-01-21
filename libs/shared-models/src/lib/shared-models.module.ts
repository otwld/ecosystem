import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import {HTTP_INTERCEPTORS, HttpClientJsonpModule, HttpClientModule, HttpHeaders} from '@angular/common/http';
import { HttpLink } from 'apollo-angular/http';
import { ModelsEnvironment } from './models/models.environment';
import { InMemoryCache } from '@apollo/client/core';
import {HttpLanguageInterceptor} from './interceptors/http-language.interceptor';

@NgModule({
  imports: [
    CommonModule,
    ApolloModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
})
export class SharedModelsModule {
  constructor(@Optional() @SkipSelf() parentModule: SharedModelsModule) {
    throwIfAlreadyLoaded(parentModule, 'SharedCoreModule');
  }

  public static forRoot(
    environment: ModelsEnvironment
  ): ModuleWithProviders<SharedModelsModule> {
    return {
      ngModule: SharedModelsModule,
      providers: [
        {
          provide: APOLLO_OPTIONS,
          useFactory: (httpLink: HttpLink) => {
            return {
              cache: new InMemoryCache(),
              link: httpLink.create({
                uri: environment.apiUrl,
              }),
            };
          },
          deps: [HttpLink],
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpLanguageInterceptor,
          multi: true
        }
      ],
    };
  }
}

export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    throw new Error(
      `${moduleName} has already been loaded. Import Core modules in the AppModule only.`
    );
  }
}
