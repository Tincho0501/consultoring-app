// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: 'dev',
  firebase: {
    config : {
      apiKey: "AIzaSyBljiaFUG4xuAui1CfZqMCvrLYVndKNUI0",
      authDomain: "edificacion-app-9e206.firebaseapp.com",
      projectId: "edificacion-app-9e206",
      storageBucket: "edificacion-app-9e206.appspot.com",
      messagingSenderId: "399997171899",
      appId: "1:399997171899:web:0d55ade49b8c93ecb6119e"
    }
  },
  url: 'http://localhost:5000/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
