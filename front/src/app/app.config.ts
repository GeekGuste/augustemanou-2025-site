import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { routes } from './app.routes';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Lightbox, LightboxConfig, LightboxEvent } from 'ngx-lightbox';
import { LightboxWindowRef } from 'ngx-lightbox/lightbox-event.service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
      provideZoneChangeDetection({ eventCoalescing: true }), 
      provideRouter(routes),
      Lightbox,
      LightboxConfig,
      LightboxEvent,
      LightboxWindowRef,
      provideHttpClient(withInterceptorsFromDi()),
      importProvidersFrom(
        TranslateModule.forRoot({
          defaultLanguage: 'fr',
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          },
        })
      )
    ]
};
