<a name="4.0.3"></a>
## [4.0.3](https://gitlab.com/kada-development/ifiske/compare/v4.0.2...v4.0.3) (2018-03-04)


### Bug Fixes

* **database:** fix issue with opening db on iOS 9 ([f4e4f0f](https://gitlab.com/kada-development/ifiske/commit/f4e4f0f))



<a name="4.0.2"></a>
## [4.0.2](https://gitlab.com/kada-development/ifiske/compare/v4.0.1...v4.0.2) (2018-03-03)


### Bug Fixes

* **app:** fix translation of back button in ios ([a4868b0](https://gitlab.com/kada-development/ifiske/commit/a4868b0))
* **area-info:** set a max-width on the image logo and float it to right ([988ea24](https://gitlab.com/kada-development/ifiske/commit/988ea24))
* **permit:** translate navbar title ([a92f030](https://gitlab.com/kada-development/ifiske/commit/a92f030))



<a name="4.0.1"></a>
## [4.0.1](https://gitlab.com/kada-development/ifiske/compare/v4.0.0...v4.0.1) (2018-03-01)


### Bug Fixes

* **permit:** fix german name translation ([1fab510](https://gitlab.com/kada-development/ifiske/commit/1fab510))



<a name="4.0.0"></a>
# [4.0.0](https://gitlab.com/kada-development/ifiske/compare/v3.99.91...v4.0.0) (2018-03-01)
First update to iFiske this year, we've done a lot of work behind the scenes to enable us to deliver and even better experience. Look forward to more updates later this spring!

### Updates
- Support for iPhone X
- Performance improvements
- Updated UI and design

### Special features for administrators
- Translated the control panel into English and German!
- The control panel also now works when offline.
- You can view statistics over sales directly in the app.
- Improved search function to check permits easily.



<a name="3.6.4"></a>
## [3.6.4](https://github.com/ifiske/ifiske/compare/v3.6.3...v3.6.4) (2017-08-16)


### Bug Fixes

* **admin:** add short error message regarding charts ([40597e2](https://github.com/ifiske/ifiske/commit/40597e2))
* **Admin:** don't hit network if we're not logged in ([ea0351e](https://github.com/ifiske/ifiske/commit/ea0351e))
* **api:** remove errors from cache, don't retry non-cacheable requests ([f4a5e0f](https://github.com/ifiske/ifiske/commit/f4a5e0f))
* **api:** retry failed network requests ([6fd892a](https://github.com/ifiske/ifiske/commit/6fd892a))
* **area_list:** show a spinner while searching ([95ca2d9](https://github.com/ifiske/ifiske/commit/95ca2d9))
* **area/maps:** fix navigation to poi ([2627c4d](https://github.com/ifiske/ifiske/commit/2627c4d))
* **area/search:** modify weighting to prefer fishes and nearby even more ([0836f0b](https://github.com/ifiske/ifiske/commit/0836f0b))
* **deps(sms:** Update sms plugin to include fix for permission bug): ([f254b8b](https://github.com/ifiske/ifiske/commit/f254b8b))
* **license:** only add validity color to text on license screens ([12da78b](https://github.com/ifiske/ifiske/commit/12da78b))
* **license:** set license validity colours without affecting other things ([605b0d7](https://github.com/ifiske/ifiske/commit/605b0d7))
* **license_detail:** refresh fishing licenses if license is not found in db ([11b918a](https://github.com/ifiske/ifiske/commit/11b918a))
* **login:** improve network error message ([37b480b](https://github.com/ifiske/ifiske/commit/37b480b))
* **register:** fix translation message key ([f8433ca](https://github.com/ifiske/ifiske/commit/f8433ca))
* **register/verify:** set verification input to type=tel ([ef12157](https://github.com/ifiske/ifiske/commit/ef12157))
* **translations:** add missing translation for 'Renew license' ([36fb036](https://github.com/ifiske/ifiske/commit/36fb036))
* **search:** fix issue in browsers that do not support performance.now() ([219cc72](https://github.com/ifiske/ifiske/commit/219cc72))



<a name="3.6.3"></a>
## [3.6.3](https://github.com/ifiske/ifiske/compare/v3.6.2...v3.6.3) (2017-07-31)


### Bug Fixes

* remove duplicate sms plugin ([c39a981](https://github.com/ifiske/ifiske/commit/c39a981))



<a name="3.6.2"></a>
# [3.6.2](https://github.com/ifiske/ifiske/compare/v3.6.1...v3.6.2) (2017-07-31)


### Bug Fixes

* **ads:** open link to ad when clicked ([c3cbf37](https://github.com/ifiske/ifiske/commit/c3cbf37))
* **map:** Ignore navigation cancelled error ([98f4179](https://github.com/ifiske/ifiske/commit/98f4179))
* **swiper:** add small delay to swiper initialization to fix issue with ads not displaying properly ([26ff128](https://github.com/ifiske/ifiske/commit/26ff128))



<a name="3.6.1"></a>
# [3.6.1](https://github.com/ifiske/ifiske/compare/v3.6.0...v3.6.1) (2017-07-31)


### Bug Fixes

* **ads:** change size and add drop shadow ([02520a1](https://github.com/ifiske/ifiske/commit/02520a1))
* **ads:** Load initial slide size correctly ([c9ab475](https://github.com/ifiske/ifiske/commit/c9ab475))
* **area/cards:** add OS tracking information when opening a web license purchase ([0c46a5c](https://github.com/ifiske/ifiske/commit/0c46a5c))
* **area/search:** Modify fish searching ([415e5c6](https://github.com/ifiske/ifiske/commit/415e5c6))
* **map:** watch location ([2d8a62c](https://github.com/ifiske/ifiske/commit/2d8a62c))
* **raven:** Capture caught errors in Raven ([81db164](https://github.com/ifiske/ifiske/commit/81db164))
* **slides:** fix slides autolooping ([acc470c](https://github.com/ifiske/ifiske/commit/acc470c))
* **slides:** Replace all ion-slides with swiper ([14ad1ac](https://github.com/ifiske/ifiske/commit/14ad1ac))
* log network errors in  a more verbose way ([8a47356](https://github.com/ifiske/ifiske/commit/8a47356))


### Features

* **raven:** add Raven and Sentry logging ([0edb449](https://github.com/ifiske/ifiske/commit/0edb449))


<a name="3.6.0"></a>
# [3.6.0](https://github.com/ifiske/ifiske/compare/v3.5.0...v3.6.0) (2017-07-09)


### Bug Fixes

* **admin:** fix chart display ([7c32b4a](https://github.com/ifiske/ifiske/commit/7c32b4a))
* **admin:** fix navigation between admin.main and admin.org ([9a9f187](https://github.com/ifiske/ifiske/commit/9a9f187))
* **admin:** reload organizations when entering admin view ([b630265](https://github.com/ifiske/ifiske/commit/b630265)), closes [#129](https://github.com/ifiske/ifiske/issues/129)
* **admin_controller:** fix minor bug if scope.licenseTypes does not contain the correct license ([4629a4a](https://github.com/ifiske/ifiske/commit/4629a4a))
* **admin-chart:** fix chart bar width overlap ([bb79906](https://github.com/ifiske/ifiske/commit/bb79906))
* **ads:** center ads on screens that are larger than the ad images ([8576490](https://github.com/ifiske/ifiske/commit/8576490))
* **ads:** don't show ads that haven't started / have ended ([0b389d5](https://github.com/ifiske/ifiske/commit/0b389d5))
* **ads:** fix ads not looping automatically ([3fc0b08](https://github.com/ifiske/ifiske/commit/3fc0b08))
* **ads:** open ads in system browser ([6571b40](https://github.com/ifiske/ifiske/commit/6571b40))
* **analytics:** fix events being lost before tracker started ([5309d68](https://github.com/ifiske/ifiske/commit/5309d68))
* **analytics:** move all analytics calls to a service to enable easier logging and debugging ([902250c](https://github.com/ifiske/ifiske/commit/902250c))
* **analytics:** set version to 1.7.4, see if it solves android+ios issues... :( ([6286178](https://github.com/ifiske/ifiske/commit/6286178))
* **analytics:** update analytics logging ([fce5de9](https://github.com/ifiske/ifiske/commit/fce5de9))
* **area:** fishing permit is not translated through the API, no need to translate manually ([e0f94de](https://github.com/ifiske/ifiske/commit/e0f94de))
* **area:** fix navigation to and from area_list into areas ([d1d83d4](https://github.com/ifiske/ifiske/commit/d1d83d4))
* **area_info:** update css to calculate size of image using sass ([85b6986](https://github.com/ifiske/ifiske/commit/85b6986))
* **area_list:** add fish icon to lvl indicator ([f5b750c](https://github.com/ifiske/ifiske/commit/f5b750c))
* **area_list:** always set item-height to 100px ([ce5a7f3](https://github.com/ifiske/ifiske/commit/ce5a7f3))
* **area_list:** close keyboard after searching ([f750159](https://github.com/ifiske/ifiske/commit/f750159))
* **area_list:** fix bug that sometimes didn't show the fish image ([5ec74b0](https://github.com/ifiske/ifiske/commit/5ec74b0))
* **area_list:** fix fish description not using html formatting ([a375098](https://github.com/ifiske/ifiske/commit/a375098))
* **area_list:** searching for fishes will show the amount ([6ddbea0](https://github.com/ifiske/ifiske/commit/6ddbea0))
* **area.model:** fix favorites not updating when added ([a817fac](https://github.com/ifiske/ifiske/commit/a817fac))
* **area/info:** autoloop images ([2cd5b9d](https://github.com/ifiske/ifiske/commit/2cd5b9d))
* **area/info:** Only show Files header if there are any files ([45d1930](https://github.com/ifiske/ifiske/commit/45d1930))
* **build:** fix ng-annotation tool with babel ([fbb2472](https://github.com/ifiske/ifiske/commit/fbb2472))
* **build:** readd ng-annotate ([f3ddf31](https://github.com/ifiske/ifiske/commit/f3ddf31))
* **config.xml:** fix typo of DisallowOverscroll ([b32274d](https://github.com/ifiske/ifiske/commit/b32274d))
* **CSP:** add unsafe-eval to CSP, fixes an issue on older android ([56b4430](https://github.com/ifiske/ifiske/commit/56b4430))
* **db:** fix Area_Files not populating ([978b8c5](https://github.com/ifiske/ifiske/commit/978b8c5))
* **filters:** fix filters crashing on undefined input ([b36dead](https://github.com/ifiske/ifiske/commit/b36dead))
* **fish/levels:** animate fish levels ([439258d](https://github.com/ifiske/ifiske/commit/439258d))
* **home:** fix missing borders on top and bottom elements of home page ([a0534fe](https://github.com/ifiske/ifiske/commit/a0534fe))
* **home:** set admin state to false if not logged in ([67bd3a9](https://github.com/ifiske/ifiske/commit/67bd3a9))
* **login:** allow showing password when typing it ([ce1468a](https://github.com/ifiske/ifiske/commit/ce1468a))
* **map:** change map to use leaflet 1.0 for a nice boost in performance! :) ([118ea59](https://github.com/ifiske/ifiske/commit/118ea59))
* add actual location data ([b44ff03](https://github.com/ifiske/ifiske/commit/b44ff03))
* disable overscroll ([9b5c46e](https://github.com/ifiske/ifiske/commit/9b5c46e))
* **update:** reduce update time from 1 week to 1 day ([895b3f8](https://github.com/ifiske/ifiske/commit/895b3f8))
* ignore errors when inserting into db tables ([9577390](https://github.com/ifiske/ifiske/commit/9577390))
* **map:** do not crash if there is no data ([583eb82](https://github.com/ifiske/ifiske/commit/583eb82))
* **map:** fix map size after navigation ([1472742](https://github.com/ifiske/ifiske/commit/1472742))
* **map:** fix map tap events and performance on older android and iOS ([218ec67](https://github.com/ifiske/ifiske/commit/218ec67))
* **map:** load tiles while panning for snappier experience ([46f5af8](https://github.com/ifiske/ifiske/commit/46f5af8))
* **map:** only center on user if we have not done so already with this map instance ([066569d](https://github.com/ifiske/ifiske/commit/066569d))
* **map:** update cluster and popup sizes ([06ed8bb](https://github.com/ifiske/ifiske/commit/06ed8bb))
* **polyfill:** Reflect is not available on all browsers, and needs to be polyfilled ([7b51f05](https://github.com/ifiske/ifiske/commit/7b51f05))
* make images fade in ([dafaf5a](https://github.com/ifiske/ifiske/commit/dafaf5a))
* minor fixes and updates ([834fb36](https://github.com/ifiske/ifiske/commit/834fb36))
* tweak search weights ([548119f](https://github.com/ifiske/ifiske/commit/548119f))
* **push:** added error message if user fails to login because of ionic user mismatching ([1de2c43](https://github.com/ifiske/ifiske/commit/1de2c43))
* **push:** fix push notifications ([d185099](https://github.com/ifiske/ifiske/commit/d185099))
* **search:** don't search if there is no searchstring given ([ced81eb](https://github.com/ifiske/ifiske/commit/ced81eb))
* **search:** fix county searching ([bc03b2a](https://github.com/ifiske/ifiske/commit/bc03b2a))
* **translations:** added translation for push notification error message ([1740207](https://github.com/ifiske/ifiske/commit/1740207))
* **youtube:** fix youtube navigation on iOS ([45ce41a](https://github.com/ifiske/ifiske/commit/45ce41a))
* **youtube:** fixes YT on iOS ([dbee880](https://github.com/ifiske/ifiske/commit/dbee880))


### Features

* **ads:** add ads to the home screen ([c509511](https://github.com/ifiske/ifiske/commit/c509511))
* **area_info:** add new files array and stop using deprecated map files ([f5ca61e](https://github.com/ifiske/ifiske/commit/f5ca61e))
* **license_detail:** add renew button ([59f2398](https://github.com/ifiske/ifiske/commit/59f2398))
* **search:** allow searching after species of fish ([72fab26](https://github.com/ifiske/ifiske/commit/72fab26))
* **settings.about:** added build code to about view ([e0bc381](https://github.com/ifiske/ifiske/commit/e0bc381))



<a name="3.5.1"></a>
## [3.5.1](https://github.com/ifiske/ifiske/compare/v3.5.0...v3.5.1) (2017-02-16)


### Bug Fixes

* **admin:** fix navigation between admin.main and admin.org ([9a9f187](https://github.com/ifiske/ifiske/commit/9a9f187))
* **admin:** reload organizations when entering admin view ([b630265](https://github.com/ifiske/ifiske/commit/b630265)), closes [#129](https://github.com/ifiske/ifiske/issues/129)
* **admin_controller:** fix minor bug if scope.licenseTypes does not contain the correct license ([4629a4a](https://github.com/ifiske/ifiske/commit/4629a4a))
* **analytics:** fix events being lost before tracker started ([5309d68](https://github.com/ifiske/ifiske/commit/5309d68))
* **analytics:** move all analytics calls to a service to enable easier logging and debugging ([902250c](https://github.com/ifiske/ifiske/commit/902250c))
* **analytics:** set version to 1.7.4, see if it solves android+ios issues... :( ([6286178](https://github.com/ifiske/ifiske/commit/6286178))
* **analytics:** update analytics logging ([fce5de9](https://github.com/ifiske/ifiske/commit/fce5de9))
* **area:** fishing permit is not translated through the API, no need to translate manually ([e0f94de](https://github.com/ifiske/ifiske/commit/e0f94de))
* **area_info:** update css to calculate size of image using sass ([85b6986](https://github.com/ifiske/ifiske/commit/85b6986))
* **area.model:** fix favorites not updating when added ([a817fac](https://github.com/ifiske/ifiske/commit/a817fac))
* **config.xml:** fix typo of DisallowOverscroll ([b32274d](https://github.com/ifiske/ifiske/commit/b32274d))
* **CSP:** add unsafe-eval to CSP, fixes an issue on older android ([56b4430](https://github.com/ifiske/ifiske/commit/56b4430))
* **filters:** fix filters crashing on undefined input ([b36dead](https://github.com/ifiske/ifiske/commit/b36dead))
* **home:** set admin state to false if not logged in ([67bd3a9](https://github.com/ifiske/ifiske/commit/67bd3a9))
* **map:** change map to use leaflet 1.0 for a nice boost in performance! :) ([118ea59](https://github.com/ifiske/ifiske/commit/118ea59))
* **map:** do not crash if there is no data ([583eb82](https://github.com/ifiske/ifiske/commit/583eb82))
* **map:** fix map size after navigation ([1472742](https://github.com/ifiske/ifiske/commit/1472742))
* **map:** fix map tap events and performance on older android and iOS ([218ec67](https://github.com/ifiske/ifiske/commit/218ec67))
* disable overscroll ([9b5c46e](https://github.com/ifiske/ifiske/commit/9b5c46e))
* **map:** load tiles while panning for snappier experience ([46f5af8](https://github.com/ifiske/ifiske/commit/46f5af8))
* **map:** only center on user if we have not done so already with this map instance ([066569d](https://github.com/ifiske/ifiske/commit/066569d))
* **map:** update cluster and popup sizes ([06ed8bb](https://github.com/ifiske/ifiske/commit/06ed8bb))
* **polyfill:** Reflect is not available on all browsers, and needs to be polyfilled ([7b51f05](https://github.com/ifiske/ifiske/commit/7b51f05))
* **push:** added error message if user fails to login because of ionic user mismatching ([1de2c43](https://github.com/ifiske/ifiske/commit/1de2c43))
* **translations:** added translation for push notification error message ([1740207](https://github.com/ifiske/ifiske/commit/1740207))
* **youtube:** fix youtube navigation on iOS ([45ce41a](https://github.com/ifiske/ifiske/commit/45ce41a))
* **youtube:** fixes YT on iOS ([dbee880](https://github.com/ifiske/ifiske/commit/dbee880))


### Features

* **settings.about:** added build code to about view ([e0bc381](https://github.com/ifiske/ifiske/commit/e0bc381))



<a name="3.5.0"></a>
## [3.5.0](https://github.com/ifiske/ifiske/compare/v3.4.5...v3.5.0) (2017-01-25)


### Bug Fixes

* **admin:** change state when switching organisations ([c736630](https://github.com/ifiske/ifiske/commit/c736630)), closes [#126](https://github.com/ifiske/ifiske/issues/126)
* **admin:** Update code checking form ([f6b6fb9](https://github.com/ifiske/ifiske/commit/f6b6fb9)), closes [#124](https://github.com/ifiske/ifiske/issues/124)
* **admin:** Update code checking form ([f6b6fb9](https://github.com/ifiske/ifiske/commit/f6b6fb9)), closes [#124](https://github.com/ifiske/ifiske/issues/124)
* **fish:** Update design of fish prevalence on areas ([44dbe51](https://github.com/ifiske/ifiske/commit/44dbe51)), closes [#123](https://github.com/ifiske/ifiske/issues/123)
* **fish:** Update design of fish prevalence on areas ([44dbe51](https://github.com/ifiske/ifiske/commit/44dbe51)), closes [#123](https://github.com/ifiske/ifiske/issues/123)
* **icons:** Use the new fishing license icons everywhere ([6423cdb](https://github.com/ifiske/ifiske/commit/6423cdb)), closes [#111](https://github.com/ifiske/ifiske/issues/111)
* **icons:** Use the new fishing license icons everywhere ([6423cdb](https://github.com/ifiske/ifiske/commit/6423cdb)), closes [#111](https://github.com/ifiske/ifiske/issues/111)
* **license_detail:** Stop caching license view since the content might change ([842ec0b](https://github.com/ifiske/ifiske/commit/842ec0b)), closes [#116](https://github.com/ifiske/ifiske/issues/116)
* **license_detail:** Stop caching license view since the content might change ([842ec0b](https://github.com/ifiske/ifiske/commit/842ec0b)), closes [#116](https://github.com/ifiske/ifiske/issues/116)
* **map:** Only center map using geolocation if "centerOnMe" is passed to the directive ([209141f](https://github.com/ifiske/ifiske/commit/209141f)), closes [#122](https://github.com/ifiske/ifiske/issues/122)
* **map:** Only center map using geolocation if "centerOnMe" is passed to the directive ([209141f](https://github.com/ifiske/ifiske/commit/209141f)), closes [#122](https://github.com/ifiske/ifiske/issues/122)
* **statusbar:** Set statusbar colors to light text and dark background ([89e277d](https://github.com/ifiske/ifiske/commit/89e277d)), closes [#117](https://github.com/ifiske/ifiske/issues/117)
* **statusbar:** Set statusbar colors to light text and dark background ([89e277d](https://github.com/ifiske/ifiske/commit/89e277d)), closes [#117](https://github.com/ifiske/ifiske/issues/117)
* **translations:** add missing translations for swedish ([5e6bd40](https://github.com/ifiske/ifiske/commit/5e6bd40)), closes [#128](https://github.com/ifiske/ifiske/issues/128)
* **translations:** Add some missing swedish translations ([7f2d554](https://github.com/ifiske/ifiske/commit/7f2d554)), closes [#120](https://github.com/ifiske/ifiske/issues/120)
* **translations:** Add some missing swedish translations ([7f2d554](https://github.com/ifiske/ifiske/commit/7f2d554)), closes [#120](https://github.com/ifiske/ifiske/issues/120)



<a name="3.4.5"></a>
# [3.4.5](https://github.com/ifiske/ifiske/compare/v3.4.4...v3.4.5) (2017-01-05)


### Bug Fixes

* **admin:** Fix scanning QR codes on safari ([9e8896a](https://github.com/ifiske/ifiske/commit/9e8896a))
* **admin:** Increase code input field font size ([cd5b475](https://github.com/ifiske/ifiske/commit/cd5b475)), closes [#113](https://github.com/ifiske/ifiske/issues/113)
* **admin:** Increase distance between button/heading and logo ([21b9218](https://github.com/ifiske/ifiske/commit/21b9218)), closes [#112](https://github.com/ifiske/ifiske/issues/112)
* **admin:** Load the correct area even after navigating back after popover change ([c3f06d2](https://github.com/ifiske/ifiske/commit/c3f06d2))
* **admin_chart:** Use the green color for year line and year numbers on the graph ([07e77bf](https://github.com/ifiske/ifiske/commit/07e77bf)), closes [#114](https://github.com/ifiske/ifiske/issues/114)
* **color:** Update template colours to match new colours ([477a3fe](https://github.com/ifiske/ifiske/commit/477a3fe))
* **home:** Increase size of logo in header ([12f69e2](https://github.com/ifiske/ifiske/commit/12f69e2))
* Change custom icon naming and add a better fishing license icon ([b1440f2](https://github.com/ifiske/ifiske/commit/b1440f2)), closes [#111](https://github.com/ifiske/ifiske/issues/111)
* Change logotype to match new assets ([8d48dd0](https://github.com/ifiske/ifiske/commit/8d48dd0)), closes [#115](https://github.com/ifiske/ifiske/issues/115)
* **translations:** add missing swedish translations ([7b8cbad](https://github.com/ifiske/ifiske/commit/7b8cbad)), closes [#109](https://github.com/ifiske/ifiske/issues/109)
* **user:** Fix links ([be08971](https://github.com/ifiske/ifiske/commit/be08971))
* **user:** Go back to home screen after logging out ([5953130](https://github.com/ifiske/ifiske/commit/5953130))


### Features

* **colors:** Update color scheme to match new version of website ([6a28258](https://github.com/ifiske/ifiske/commit/6a28258)), closes [#110](https://github.com/ifiske/ifiske/issues/110)



<a name="3.4.4"></a>
# [3.4.4](https://github.com/ifiske/ifiske/compare/v3.4.3...v3.4.4) (2016-12-20)


### Bug Fixes

* **admin:** Fix size of organization name when logo exists ([74b23be](https://github.com/ifiske/ifiske/commit/74b23be))
* **css:** Fix class name should be active not valid ([369f9d3](https://github.com/ifiske/ifiske/commit/369f9d3))


### Features

* **user:** Add link to own page at ifiske.se ([eb1dee0](https://github.com/ifiske/ifiske/commit/eb1dee0)), closes [#99](https://github.com/ifiske/ifiske/issues/99)



<a name="3.4.3"></a>
## [3.4.3](https://github.com/ifiske/ifiske/compare/v3.4.2...v3.4.3) (2016-12-10)


### Bug Fixes

* **admin:** Fix first license card lower than others ([1246629](https://github.com/ifiske/ifiske/commit/1246629)), closes [#108](https://github.com/ifiske/ifiske/issues/108)
* **admin:** Fix Object.values missing on Safari ([900b00a](https://github.com/ifiske/ifiske/commit/900b00a))
* **admin:** Redesign admin page ([90f9a8f](https://github.com/ifiske/ifiske/commit/90f9a8f))
* **languageSwitcher:** Actually cancel the interval ([1c45fb4](https://github.com/ifiske/ifiske/commit/1c45fb4))
* **languageSwitcher:** cancels the interval when leaving the view ([bc1c61a](https://github.com/ifiske/ifiske/commit/bc1c61a))
* **languageSwitcher:** Fix rolling text bugs on iOS ([077fc06](https://github.com/ifiske/ifiske/commit/077fc06))
* **Settings:** Clear view cache whenever language is changed ([eba1a75](https://github.com/ifiske/ifiske/commit/eba1a75))
* **tabs:** Increase size of footer-bar to 50px to increase visibility ([a0f072a](https://github.com/ifiske/ifiske/commit/a0f072a)), closes [#107](https://github.com/ifiske/ifiske/issues/107)
* **translation:** Added lang query parameter to most outbound links ([cfba886](https://github.com/ifiske/ifiske/commit/cfba886))
* **translation:** Update home screen pluralisation of fishing areas ([05fc88d](https://github.com/ifiske/ifiske/commit/05fc88d))
* **translations:** Pluralize some translations ([73766dc](https://github.com/ifiske/ifiske/commit/73766dc))



<a name="3.4.2"></a>
## [3.4.2](https://github.com/ifiske/ifiske/compare/v3.4.1...v3.4.2) (2016-12-07)


### Bug Fixes

* **admin:** Easier switching of active organization ([8801436](https://github.com/ifiske/ifiske/commit/8801436)), closes [#104](https://github.com/ifiske/ifiske/issues/104)
* **admin:** Order licenses by date ([a4b730f](https://github.com/ifiske/ifiske/commit/a4b730f))
* **admin:** Trying to make the admin pages update so that they feel more "live" ([a4ee998](https://github.com/ifiske/ifiske/commit/a4ee998))
* **languageSwitcher:** Add the image background to the languageSwitcher ([03189eb](https://github.com/ifiske/ifiske/commit/03189eb))
* **product:** Fix pointer events of products ([a2d6400](https://github.com/ifiske/ifiske/commit/a2d6400)), closes [#100](https://github.com/ifiske/ifiske/issues/100)
* **translation:** Translate Contact title ([7097e93](https://github.com/ifiske/ifiske/commit/7097e93))
* **user_info:** Reload user info before entering page ([1fc0301](https://github.com/ifiske/ifiske/commit/1fc0301)), closes [#106](https://github.com/ifiske/ifiske/issues/106)
* Valid renamed to active ([9ad07c7](https://github.com/ifiske/ifiske/commit/9ad07c7))


### Features

* **admin:** Update admin styling and navigation ([790f218](https://github.com/ifiske/ifiske/commit/790f218)), closes [#98](https://github.com/ifiske/ifiske/issues/98) [#102](https://github.com/ifiske/ifiske/issues/102) [#103](https://github.com/ifiske/ifiske/issues/103) [#104](https://github.com/ifiske/ifiske/issues/104)
* **analytics:** Sends search terms from home page to analytics ([cdd986f](https://github.com/ifiske/ifiske/commit/cdd986f))
* **languageSwitcher:** Rotate title text language every 3s ([3aff180](https://github.com/ifiske/ifiske/commit/3aff180)), closes [#105](https://github.com/ifiske/ifiske/issues/105)



<a name="3.4.1"></a>
## [3.4.1](https://github.com/ifiske/ifiske/compare/v3.4.0...v3.4.1) (2016-12-05)


### Bug Fixes

* **analytics:** Use the newest version of GA so it works on iOS ([bb638f8](https://github.com/ifiske/ifiske/commit/bb638f8))
* **database:** Fix Safari bug when creating tables ([964a111](https://github.com/ifiske/ifiske/commit/964a111))



<a name="3.4.0"></a>
# [3.4.0](https://github.com/ifiske/ifiske/compare/v3.3.10...v3.4.0) (2016-11-24)


### Bug Fixes

* **api:** Set get_enginepolicies to correct name ([2621a24](https://github.com/ifiske/ifiske/commit/2621a24))
* **area:** Remove some margins for p-tags on area info ([1444c3b](https://github.com/ifiske/ifiske/commit/1444c3b))
* **area_cards:** Add language parameter to outbound link ([1ef5cbb](https://github.com/ifiske/ifiske/commit/1ef5cbb))
* **area_info:** Use translations for popups and toasts ([ae30dc3](https://github.com/ifiske/ifiske/commit/ae30dc3))
* **area_list:** Uses translations for the search placeholders ([0c9980e](https://github.com/ifiske/ifiske/commit/0c9980e))
* **de_translation:** Added translation for catch report ([1944f06](https://github.com/ifiske/ifiske/commit/1944f06))
* **find_areas:** Use translations for title ([04864f4](https://github.com/ifiske/ifiske/commit/04864f4))
* **map:** automatically shows the user location ([b63b0c0](https://github.com/ifiske/ifiske/commit/b63b0c0))
* Fixes rebasing issues ([2a283fa](https://github.com/ifiske/ifiske/commit/2a283fa))
* **menu:** Enables the login button  ([a39351e](https://github.com/ifiske/ifiske/commit/a39351e))
* **style:** Fixes issue with overflow: hidden cropping text in lists ([7f7092c](https://github.com/ifiske/ifiske/commit/7f7092c))
* **style:** Fixes the abstract and image backgrounds ([93387fc](https://github.com/ifiske/ifiske/commit/93387fc))
* **technique_detail:** Fixes Youtube placement ([ff5ad16](https://github.com/ifiske/ifiske/commit/ff5ad16))
* **user_cards:** Fixes pull to refresh-triggering ([a2219f3](https://github.com/ifiske/ifiske/commit/a2219f3))
* **user_cards:** Use User.update instead of Update.update ([3b66a62](https://github.com/ifiske/ifiske/commit/3b66a62))
* **UserModel:** Fix UserProducts not populating ([cafb9f0](https://github.com/ifiske/ifiske/commit/cafb9f0))


### Features

* **Ionic Cloud:** Updates Ionic Cloud to 0.9.0 ([ca7c448](https://github.com/ifiske/ifiske/commit/ca7c448))
* **languageSwitcher:** Can now select which language to use ([15ff213](https://github.com/ifiske/ifiske/commit/15ff213))
* **translations:** Add German and English languages ([d518edd](https://github.com/ifiske/ifiske/commit/d518edd))
* **translations:** Update translations ([cf3aab5](https://github.com/ifiske/ifiske/commit/cf3aab5))



<a name="3.3.10"></a>
## [3.3.10](https://github.com/ifiske/ifiske/compare/v3.3.9...v3.3.10) (2016-06-28)



<a name="3.3.9"></a>
## [3.3.9](https://github.com/ifiske/ifiske/compare/v3.3.7...v3.3.9) (2016-06-16)



<a name="3.3.7"></a>
## [3.3.7](https://github.com/ifiske/ifiske/compare/v3.3.6...v3.3.7) (2016-05-18)



<a name="3.3.6"></a>
## [3.3.6](https://github.com/ifiske/ifiske/compare/v3.3.5...v3.3.6) (2016-05-17)



<a name="3.3.5"></a>
## [3.3.5](https://github.com/ifiske/ifiske/compare/v3.3.4...v3.3.5) (2016-05-01)



<a name="3.3.4"></a>
## [3.3.4](https://github.com/ifiske/ifiske/compare/v3.3.3...v3.3.4) (2016-05-01)



<a name="3.3.3"></a>
## [3.3.3](https://github.com/ifiske/ifiske/compare/v3.3.0...v3.3.3) (2016-04-30)



<a name="3.3.0"></a>
# [3.3.0](https://github.com/ifiske/ifiske/compare/v3.2.3...v3.3.0) (2016-04-20)



<a name="3.2.3"></a>
## [3.2.3](https://github.com/ifiske/ifiske/compare/3.2.0...v3.2.3) (2016-04-11)



<a name="3.1.2"></a>
## [3.1.2](https://github.com/ifiske/ifiske/compare/3.1.0...3.1.2) (2015-11-18)
