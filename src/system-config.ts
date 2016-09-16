"use strict";

// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  'admin-lte' : 'node_modules/admin-lte/dist'
};

/** User packages configuration. */
const packages: any = {
  'rxjs' : {main: './Rx.js'},
'@angular/core' : {main: 'bundles/core.umd.min.js', format: 'cjs'},
'@angular/common' : {main: 'bundles/common.umd.min.js'},
'@angular/compiler' : {main: 'bundles/compiler.umd.min.js'},
'@angular/forms' : {main: 'bundles/forms.umd.min.js'},
'@angular/router' : {main: 'bundles/router.umd.min.js'},
'@angular/platform-browser' : {main: 'bundles/platform-browser.umd.min.js'},
'@angular/platform-browser-dynamic': {main: 'bundles/platform-browser-dynamic.umd.min.js'},
'@angular/http' : {main: 'bundles/http.umd.min.js'},
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/sidebarnav',
  'app/headerbar',
  'app/subheaderbar',
  'app/footerbar',
  'app/bodydetail',
  'app/home-component',
  'app/home',
  'app/user',
  'app/userdashboard',
  'app/project',
  'app/projectdashboard',
  'app/projectlist',
  'app/udemypractice',
  'app/apiexample',
  'app/apinotes',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
