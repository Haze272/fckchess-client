import {APP_INITIALIZER, ApplicationConfig} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";

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
    }
  ]
};
