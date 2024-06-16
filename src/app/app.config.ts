import {APP_INITIALIZER, ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {MessageService} from "primeng/api";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export function initialize() {
  return async () => {
    console.log('App initialized');
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
    {
      provide: APP_INITIALIZER,
      useFactory: initialize,
      deps: [],
      multi: true
    },
    importProvidersFrom(
      BrowserAnimationsModule,
    ),
    MessageService
  ]
};
