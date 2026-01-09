// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    // Public key - it is OK to store in the source code. See https://firebase.google.com/docs/projects/api-keys
    apiKey: "AIzaSyAa15mSqpwcHLEtOwNQvpV8DhHB8bywpM0",
    authDomain: "metta-backend.firebaseapp.com",
    projectId: "metta-backend",
    storageBucket: "metta-backend.appspot.com",
    messagingSenderId: "685761350212",
    appId: "1:685761350212:web:9dfeca53e70e9b08b00a11",
    measurementId: "G-TSZ34L8PBQ"
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
