import Vue from 'vue'
import router from './router.js'
import axios from 'axios'
import SocialSharing from 'vue-social-sharing'
import jQuery from "jquery";

window.$ = window.jQuery = jQuery;
require('bootstrap');

Vue.prototype.$http = axios;

Vue.use(SocialSharing);

new Vue({
  router: router, // routerにはrouter.jsファイルを設定する
 }).$mount('#app') // routerを適用する要素を設定(マウント)する