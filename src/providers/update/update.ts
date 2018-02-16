import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { MapDataProvider } from '../map-data/map-data';
import { Loading } from 'ionic-angular';
import { AreaProvider } from '../area/area';
import { FishProvider } from '../fish/fish';
import { UserProvider } from '../user/user';
import { OrganizationProvider } from '../organization/organization';
import { InformationProvider } from '../information/information';
import { CountyProvider } from '../county/county';
import { RuleProvider } from '../rule/rule';
import { TermsProvider } from '../terms/terms';
import { TranslateLoadingController } from '../translate-loading-controller/translate-loading-controller';
import { TranslateToastController } from '../translate-toast-controller/translate-toast-controller';
import { TranslateService } from '@ngx-translate/core';
import { SettingsProvider } from '../settings/settings';
import { ProductProvider } from '../product/product';
import { Network } from '@ionic-native/network';
import { take } from 'rxjs/operators';
import { TechniqueProvider } from '../technique/technique';

@Injectable()
export class UpdateProvider {
  updates: {update: (shouldUpdate?: boolean) => Promise<boolean>}[];
  private static readonly LAST_UPDATE = 'last_update';

  loading: Loading;

  constructor(
    private loadingCtrl: TranslateLoadingController,
    private toastCtrl: TranslateToastController,
    private translate: TranslateService,
    private settings: SettingsProvider,
    private network: Network,

    area: AreaProvider,
    county: CountyProvider,
    fish: FishProvider,
    information: InformationProvider,
    mapData: MapDataProvider,
    product: ProductProvider,
    organization: OrganizationProvider,
    // Product,
    rule: RuleProvider,
    technique: TechniqueProvider,
    terms: TermsProvider,
    user: UserProvider,
  ) {
    let savedLanguage = this.settings.language;
    this.translate.onLangChange.subscribe(()=> {
      if (savedLanguage !== this.settings.language) {
        savedLanguage = this.settings.language;
        this.forcedUpdate();
      }
    });

    this.updates = [
      area,
      county,
      fish,
      information,
      mapData,
      organization,
      rule,
      user,
      terms,
      technique,
      // Product.update,
      // Technique.update,
      // Terms.update,
    ];

  }
  timedUpdate(currentTime) {
    var lastUpdate = Number(localStorage.getItem(UpdateProvider.LAST_UPDATE));

    var aDay = 1000 * 3600 * 24 * 1;
    return (currentTime - lastUpdate) > aDay;
  }

  async updateFunc(forced, hideLoading) {
    // TODO: this seems to block updating sometimes :/
    // await this.network.onConnect().pipe(take(1)).toPromise();

    if (!hideLoading) {
      this.loading = await this.loadingCtrl.show({
        content: 'Updating',
      });
    }
    var currentTime = Date.now();
    var shouldUpdate = (forced || this.timedUpdate(currentTime));

    var promises = [];
    for (var i = 0; i < this.updates.length; ++i) {
      promises.push(this.updates[i].update(shouldUpdate));
    }

    const result = Promise.all(promises).then(() => {
      if (shouldUpdate) {
        localStorage.setItem(UpdateProvider.LAST_UPDATE, "" + currentTime);
      }
    }, (error) => {
      // TODO: raven
      // Raven.captureException(error);
      this.toastCtrl.show({
        message: 'Network Error',
        duration: 4000,
      });


      // Must rethrow error to fail later
      throw error;
    });

    result.catch(() => {}).then(() => {
      this.loading.dismiss();
    });
    return result;
  }

  update(hideLoading = false) {
    return this.updateFunc(false, hideLoading);
  }

  forcedUpdate(hideLoading = false) {
    return this.updateFunc(true, hideLoading);
  }

  get lastUpdate() {
    return localStorage.getItem(UpdateProvider.LAST_UPDATE);
  }
}
