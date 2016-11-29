/* global navigator */
import Ember from 'ember';

const {
  Service,
  isPresent
} = Ember;

export default Service.extend({
  hide() {
    document.addEventListener('deviceready', function() {
      if (isPresent(navigator) && isPresent(navigator.splashscreen)) {
        navigator.splashscreen.hide();
      }
    });
  },

  show() {
    document.addEventListener('deviceready', function() {
      if (isPresent(navigator) && isPresent(navigator.splashscreen)) {
        navigator.splashscreen.show();
      }
    });
  }
});
