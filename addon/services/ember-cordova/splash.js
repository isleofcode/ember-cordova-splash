import Ember from 'ember';

const {
  Service,
  isPresent
} = Ember;

export default Service.extend({
  hide() {
    document.addEventListener('deviceready', function() {
      const navigator = window.navigator;
      if (isPresent(navigator) && isPresent(navigator.splashscreen)) {
        navigator.splashscreen.hide();
      }
    });
  },

  show() {
    document.addEventListener('deviceready', function() {
      const navigator = window.navigator;
      if (isPresent(navigator) && isPresent(navigator.splashscreen)) {
        navigator.splashscreen.show();
      }
    });
  }
});
