import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

import { provideToastr } from 'ngx-toastr';
import { BrowserAnimationsModule, provideAnimations} from '@angular/platform-browser/animations';

import {NgxSpinnerModule} from "ngx-spinner";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(),provideToastr({
    closeButton: true, positionClass: 'toast-top-right',
    timeOut: 10000, preventDuplicates:true
  }),
    provideAnimations(),
    importProvidersFrom(NgxSpinnerModule.forRoot()),
    importProvidersFrom(BrowserAnimationsModule)
  ]
};

