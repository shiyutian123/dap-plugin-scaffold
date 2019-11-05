/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-12 17:24:19
 * @LastEditTime: 2019-11-05 09:14:41
 * @LastEditors: Devin Shi
 */
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  hmr: false,
  useHash: true,

  enableTracing: true,
  isDebug: true,
  onSameUrlNavigation: 'ignore',
  scrollPositionRestoration: 'enabled',
  localUrl: 'http://localhost:4800',
  redirectTo: 'home',
  // __START_ENV_CONFIG__ //
    
  "needSSO": false,
  "baseDomain": "http://k8s.definesys.com:30557",
  "ssoDomain": "http://k8s.definesys.com:30008",
  "appInfo": {
    "appId": "238a7db5-c183-4580-aedb-4a2c868acdd6",
    "appSecre": "00970853-8269-4ef8-980f-a8bdbf0b1c88",
    "appCode": "sdmp",
    "sidebarEnable": false,
    "title": "DAP脚手架"
  },
  "clientId": "dapAppClient"
    // __END_ENV_CONFIG__ //
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
