// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
// 祖册全局组件
import Header from './components/Header';
import Star from './components/Star/';
import CartControl from './components/CartControl';
import Split from './components/Split';
// 引入store
import store from './store';
import './validate.js';
// 引入格式化时间
import './filter';
// mock模拟数据
import './mock/mock-server.js';
// mint-ui
import { Button } from 'mint-ui';
// 图片懒加载
import VueLazyload from 'vue-lazyload';
import loading from './common/images/loading.gif';
Vue.use(VueLazyload, {
  loading
});
Vue.component(Button.name, Button);
Vue.component('Header', Header);
Vue.component('Star', Star);
Vue.component('CartControl', CartControl);
Vue.component('Split', Split);

// 使用事件总线
Vue.prototype.$eventBus = new Vue();
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
});
