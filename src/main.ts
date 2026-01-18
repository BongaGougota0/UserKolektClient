import { bootstrapApplication } from '@angular/platform-browser';
import { appConfigExtended } from './app/app.config';
import { AppComponent } from './app/app';

bootstrapApplication(AppComponent, appConfigExtended)
  .catch((err) => console.error(err));
