import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { serverLocation } from './serverLocation';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import { SettingsProvider } from '../settings/settings';
import { SessionProvider } from '../session/session';
import { timeout, map, catchError, retryWhen, zip, switchAll, shareReplay } from 'rxjs/operators';
import { TranslateToastController } from '../translate-toast-controller/translate-toast-controller';
import { Observable } from 'rxjs/Observable';
import { timer } from 'rxjs/observable/timer';
import { range } from 'rxjs/observable/range';
import { Dictionary } from '../../types';

interface ApiResponse {
  message?: any;
  data?: any;
  status: 'success' | 'error';
}

export interface ApiError {
  response: string;
  error_code: number;
}

export interface ApiOptions {
  retry?: boolean;
  cacheTime?: number;
  session?: boolean;
  post?: boolean;
}

export interface CachedResult {
  result: Observable<any>;
  removeAt: number;
  cacheTime: number;
}


@Injectable()
export class ApiProvider {

  private static readonly DefaultOptions = {
    retry: true,
    cacheTime: 0,
    session: false,
  }

  private static readonly BASE_URL = serverLocation + '/api/v2/api.php';
  private readonly maxRetries = 1;

  private cache = new Map<string, CachedResult>();

  constructor(
    private http: HttpClient,
    private sessionData: SessionProvider,
    private settings: SettingsProvider,
    private toastCtrl: TranslateToastController,
  ) {
    /* Clear cache periodically */
    setInterval(() => {
      console.log('Clearing API cache');
      this.cache.forEach((val, key) => {
        if (val.removeAt < Date.now()) {
          this.cache.delete(key);
        }
      });
    }, 10 * 1000);
  }

  private getObservable(inputParams: Dictionary<string | number>, options?: ApiOptions): Observable<any> {
    options = Object.assign({}, ApiProvider.DefaultOptions, options)

    inputParams = Object.assign({}, inputParams, {
      lang: this.settings.language,
      key: 'ox07xh8aaypwvq7a',
    });

    if (options.session) {
      inputParams.s = this.sessionData.token;
    }

    const params = Object.keys(inputParams).reduce((p, k) => inputParams[k] ? p.set(k, '' + inputParams[k]) : p, new HttpParams());

    if (options.cacheTime && this.cache.has(params.toString())) {
      const res = this.cache.get(params.toString());
      console.log('found cached observable', res);
      if (res.cacheTime === options.cacheTime) {
        res.removeAt = Date.now() + options.cacheTime;
        return res.result;
      }
    }

    let httpResult;
    if (options.session || options.post) {
      httpResult = this.http.post(ApiProvider.BASE_URL, params);
    } else {
      httpResult = this.http.get(ApiProvider.BASE_URL, { params });
    }
    const result$ = httpResult.pipe(
      timeout(10000),
      map((response: ApiResponse) => {
        if (response.status !== 'error' && response.data != undefined && response.data.response != undefined) {
          return response.data.response;
        }
        throw response;
      }),
      retryWhen(attempts => attempts.pipe(
        zip(
          range(1, this.maxRetries + 1),
          (err, i) => {
            if (i > this.maxRetries) {
              throw err;
            }
            console.log('delaying API retry by ' + i * 2 + ' second(s).')
            return timer(i * 2000)
          },
        ),
        switchAll(),
      )),
      catchError(err => {
        if (!err) {
          throw new Error('Unknown network failure');
        } else if (err.status === 0) {
          throw new Error('Request timeout');
        } else if (err.message) {
          switch (err.message.error_code) {
            case 7:
              // Authentication error
              if (this.sessionData.token) {
                this.sessionData.token = undefined;
                this.toastCtrl.show({
                  message: 'You have been logged out',
                  duration: 6000,
                });
              }
              break;
          }
          throw err.message;
        } else if (err.data) {
          throw err.data;
        }
        throw new Error(`Network Error: ${JSON.stringify(err, null, 1)}`);
      }),
    );

    if (options.cacheTime) {
      this.cache.set(params.toString(), {
        result: result$.pipe(
          shareReplay(1),
        ),
        cacheTime: options.cacheTime,
        removeAt: Date.now() + options.cacheTime,
      });
    }

    return result$;
  }
  /**
     * internal function for making a call to the ifiske API
     * @param  {object} params parameters for the api call. Should always contain 'm', which is the api "method" to request.
     * @param  {number} retries The amount of retries for this request. Should not be sent by a user.
     * @return {promise}        $http promise
     */
  private api_call(params, options?: ApiOptions): Promise<any> {
    return this.getObservable(params, options).toPromise();
  }

  get_municipalities() {
    return this.api_call({ m: 'get_municipalities' });
  }
  get_counties() {
    return this.api_call({ m: 'get_counties' });
  }
  user_exists(username?: string, email?: string) {
    var args: any = { m: 'user_exists' };

    if (username && typeof username === 'string') {
      args.username = username;
    }
    if (email && typeof email === 'string') {
      args.email = email;
    }

    return this.api_call(args, { retry: false });
  }
  user_register(userDetails) {
    return this.api_call(Object.assign({ m: 'user_register' }, userDetails), { retry: false, post: true });
  }
  user_confirm(username, pin) {
    return this.api_call({
      m: 'user_confirm',
      username: username,
      pin: pin,
    }, { retry: false, post: true });
  }
  user_info() {
    return this.api_call({ m: 'user_info' }, { session: true, cacheTime: 60000 });
  }
  user_lost_password(user) {
    return this.api_call({
      m: 'user_lost_password',
      user_identification: user,
    }, { retry: false, post: true });
  }
  user_reset_password({
    username,
    password,
    code,
  }) {
    return this.api_call({
      m: 'user_reset_password',
      user_identification: username,
      password,
      code,
    }, { retry: false, post: true });
  }
  user_change_password(old_password, new_password) {
    return this.api_call({
      m: 'user_change_password',
      old_password: old_password,
      new_password: new_password,
    }, { retry: false, session: true});
  }
  user_login(username, password) {
    return this.api_call({
      m: 'user_login',
      username: username,
      password: password,
    }, { retry: false, post: true })
      .then((data) => {
        this.sessionData.token = data;
        // needed for chaining of promises
        return data;
      });
  }
  user_logout() {
    return this.api_call({ m: 'user_logout' }, { retry: false, session: true })
      .then(() => {
        this.sessionData.token = undefined;
      });
  }
  user_products() {
    return this.api_call({ m: 'user_products' }, {retry: false, session: true});
  }
  user_set_pushtoken(token: string) {
    return this.api_call({
      m: 'user_set_pushtoken',
      token: token,
      type: 2, // 2 is for FCM
    }, {retry: false, session: true});
  }

  /*
       * Administration endpoints
       */
  user_organizations() {
    return this.api_call({ m: 'user_organizations' }, { retry: false, session: true });
  }
  adm_products(orgid) {
    return this.api_call({ m: 'adm_products', orgid: orgid }, { retry: false, session: true });
  }
  adm_revoke_prod(code, flag) {
    return this.api_call({ m: 'adm_revoke_prod', code: code, flag: flag }, { retry: false, session: true });
  }
  adm_check_prod(code) {
    return this.api_call({ m: 'adm_check_prod', code: code }, { retry: false, session: true });
  }
  adm_get_stats(orgid) {
    return this.api_call({ m: 'adm_get_stats', orgid: orgid }, { retry: false, session: true });
  }

  admGetStats(orgid?: number | string) {
    return this.getObservable({ m: 'adm_get_stats', orgid }, {
      session: true,
      cacheTime: 30 * 1000,
    })
  }

  get_fishes() {
    return this.api_call({ m: 'get_fishes' });
  }
  get_techniques() {
    return this.api_call({ m: 'get_techniques' });
  }
  get_baits() {
    return this.api_call({ m: 'get_baits' });
  }
  get_organizations(orgid) {
    return this.api_call({
      m: 'get_organizations',
      orgid: orgid,
    });
  }
  get_org_modified(orgid) {
    return this.api_call({
      m: 'get_org_modified',
      orgid: orgid,
    });
  }
  get_areas(areaid?: number | string) {
    return this.api_call({
      m: 'get_areas',
      areaid: areaid,
    });
  }
  get_images(orgid?: number | string, areaid?: number | string) {
    return this.api_call({
      m: 'get_images',
      orgid,
      areaid,
    });
  }
  get_areas_modified(areaid) {
    return this.api_call({
      m: 'get_areas_modified',
      areaid: areaid,
    });
  }
  get_products(areaid) {
    return this.api_call({
      m: 'get_products',
      areaid: areaid,
    });
  }
  get_rules(ruleid) {
    return this.api_call({
      m: 'get_rules',
      ruleid: ruleid,
    });
  }
  get_photos(orgid, areaid) {
    return this.api_call({
      m: 'get_photos',
      orgid: orgid,
      areaid: areaid,
    });
  }
  get_map_pois(orgid?) {
    return this.api_call({
      m: 'get_map_pois',
      orgid: orgid,
    });
  }
  get_map_poi_types() {
    return this.api_call({ m: 'get_map_poi_types' });
  }
  get_map_polygons(orgid?) {
    return this.api_call({
      m: 'get_map_polygons',
      orgid,
    });
  }
  user_get_favorites() {
    return this.api_call({ m: 'user_get_favorites' }, { retry: false, session: true });
  }
  user_add_favorite(area) {
    // Flag 0 means to not get notifications on catch reports
    return this.api_call({ m: 'user_add_favorite', areaid: area, flag: 0 }, { retry: false, session: true });
  }
  user_set_favorite_notification(area, flag) {
    flag = flag ? 1 : 0;
    return this.api_call({
      m: 'user_set_favorite_notification',
      areaid: area,
      flag: flag,
    }, { retry: false, session: true });
  }
  user_remove_favorite(area) {
    return this.api_call({ m: 'user_remove_favorite', areaid: area }, { retry: false, session: true });
  }
  get_terms_of_service() {
    return this.api_call({ m: 'get_terms_of_service' });
  }
  get_contact_info() {
    return this.api_call({ m: 'get_contact_info' });
  }
  get_enginepolicies() {
    return this.api_call({ m: 'get_enginepolicies' });
  }
  get_sms_terms() {
    return this.api_call({ m: 'get_sms_terms' });
  }
  get_mapbox_api() {
    return this.api_call({ m: 'get_mapbox_apiaccesstoken' });
  }
  get_content_menu = () => {
    return this.api_call({ m: 'get_content_menu' });
  }

  get_ads_main = () => this.api_call({ m: 'get_ads_main' });

  getAdsMain = () => this.getObservable({m: 'get_ads_main' }, { cacheTime: 60000 });


}
