import Ember from 'ember';

const {
  Service,
  isPresent
} = Ember;

export default Service.extend({
  hide() {
    document.addEventListener('deviceready', () => {
      const navigator = window.navigator;
      if (isPresent(navigator) && isPresent(navigator.splashscreen)) {
        navigator.splashscreen.hide();
      } else {
        this.error('hide');
      }
    });
  },

  show() {
    document.addEventListener('deviceready', () => {
      const navigator = window.navigator;
      if (isPresent(navigator) && isPresent(navigator.splashscreen)) {
        navigator.splashscreen.show();
      } else {
        this.error('show');
      }
    });
  },

  error(fnName) {
    console.warn(`ember-cordova/splash:
      Trying to call ${fnName} but splash plugin is not accessible`
     );
  }
});
