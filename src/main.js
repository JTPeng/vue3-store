// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import Header from './components/Header';
import Star from './components/Star/';
// 引入store
import store from "./store";
import './validate.js';
import './mock/mock-server.js'
import { Button } from 'mint-ui';

Vue.component(Button.name, Button);
Vue.component('Header',Header);
Vue.component('Star',Star);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
