import {
  ApplicationConfig,
  mergeApplicationConfig,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { authReducers } from '../app/store/auth/auth.reducers';
import { routes } from './app.routes';
import { ActionReducer, provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AuthEffects } from './store/auth/auth.effects';
import * as fromAuthReducers from './store/auth/auth.reducers';
import { localStorageSync } from 'ngrx-store-localstorage';

function authLocalStorageReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: [fromAuthReducers.authFeatureKey],
    rehydrate: true,
    storage: window.localStorage
  })(reducer);
}

const metaAuthreducer = [authLocalStorageReducer];

const ngrxConfig = {
  providers: [
    provideStore({}, {metaReducers: metaAuthreducer}),
    provideState(fromAuthReducers.authFeatureKey, fromAuthReducers.authReducers),
    provideEffects(AuthEffects),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: false,
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
  ],
};

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(), provideRouter(routes), provideHttpClient()],
};

export const appConfigExtended = mergeApplicationConfig(ngrxConfig, appConfig);
