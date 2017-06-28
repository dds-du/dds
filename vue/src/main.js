// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'

/*require('./assets/css/bootstrap.min.css')
require('./assets/css/bootstrap-theme.min.css')
require('./assets/css/bootstrap.css.map')
require('./assets/js/bootstrap.min.js')*/
require('./assets/css/index.css')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
