// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url: 'http://localhost:5000/games-votes-graphic/us-central1',
  firebase: {
    apiKey: 'AIzaSyBXLsuENzQcTtoBcf2qagukiuX3U_Rf9mo',
    authDomain: 'games-votes-graphic.firebaseapp.com',
    projectId: 'games-votes-graphic',
    storageBucket: 'games-votes-graphic.appspot.com',
    messagingSenderId: '253088453863',
    appId: '1:253088453863:web:50e0719b4b8cf1c0b7fe42'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
