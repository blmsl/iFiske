import { Injectable, Injector, ErrorHandler } from '@angular/core';
import { Pro } from '@ionic/pro';
import { IonicErrorHandler } from 'ionic-angular';
import { APP_VERSION, APP_ID } from './config';

const IonicPro = Pro.init(APP_ID, {
  appVersion: APP_VERSION,
});

@Injectable()
export class IonicProErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;

  constructor(injector: Injector) {
    try {
      this.ionicErrorHandler = injector.get(IonicErrorHandler);
    } catch(e) {
      // Unable to get the IonicErrorHandler provider, ensure
      // IonicErrorHandler has been added to the providers list below
    }
  }

  handleError(err: any): void {
    IonicPro.monitoring.handleNewError(err);
    // Remove this if you want to disable Ionic's auto exception handling
    // in development mode.
    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }
}
