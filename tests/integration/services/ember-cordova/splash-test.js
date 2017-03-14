/* global Event */
import { moduleFor, test } from 'ember-qunit';
import td from 'testdouble';

const fireDeviceReady = function() {
  window.document.dispatchEvent(new Event('deviceready'));
};

moduleFor('service:ember-cordova/splash', 'Integration | Service | cordova/splash', {
  integration: true,

  afterEach: function() {
    td.reset();
  }
});

test('proxies show/hide events', function(assert) {
  assert.expect(0);
  let splashService = this.subject();

  let pluginDouble = td.object({
    hide: function() {},
    show: function() {}
  });

  window.navigator.splashscreen = pluginDouble;

  splashService.hide();
  splashService.show();
  fireDeviceReady();

  td.verify(pluginDouble.hide());
  td.verify(pluginDouble.show());
});
