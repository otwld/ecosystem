import {
  InjectionToken,
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import {
  HTTP_INTERCEPTORS,
  HttpClientJsonpModule,
  HttpClientModule,
} from '@angular/common/http';
import { HttpLink } from 'apollo-angular/http';
import { ModelsEnvironment } from './models/models.environment';
import { InMemoryCache } from '@apollo/client/core';
import { HttpLanguageInterceptor } from './interceptors/http-language.interceptor';
import { makeStateKey, TransferState } from '@angular/platform-browser';

const APOLLO_CACHE = new InjectionToken<InMemoryCache>('apollo-cache');
const STATE_KEY = makeStateKey<any>('apollo.state');

@NgModule({
  imports: [
    CommonModule,
    ApolloModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  providers: [
    {
      provide: APOLLO_CACHE,
      useValue: new InMemoryCache(),
    },
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
          useFactory(
            httpLink: HttpLink,
            cache: InMemoryCache,
            transferState: TransferState
          ) {
            const isBrowser = transferState.hasKey<any>(STATE_KEY);

            if (isBrowser) {
              const state = transferState.get<any>(STATE_KEY, null);
              cache.restore(state);
            } else {
              transferState.onSerialize(STATE_KEY, () => {
                return cache.extract();
              });
              // Reset cache after extraction to avoid sharing between requests
              cache.reset();
            }
            return {
              cache,
              link: httpLink.create({
                uri: environment.apiUrl,
              }),
            };
          },
          deps: [HttpLink, APOLLO_CACHE, TransferState],
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpLanguageInterceptor,
          multi: true,
        },
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
