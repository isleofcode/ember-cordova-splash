'use strict';

const ecInstaller   = require('ember-cordova-installer');

module.exports = {
  description: 'Installs the cordova splashscreen plugin',

  normalizeEntityName: function() {},

  afterInstall: function() {
    ecInstaller.install('cordova-plugin-splashscreen', this);
  }
};
