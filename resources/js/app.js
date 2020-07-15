import Vue from 'vue'
import router from './router.js'
import axios from 'axios'
import SocialSharing from 'vue-social-sharing'
import jQuery from "jquery";
import Notifications from 'vue-notification'
import MainPage from './components/page/MainPage'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

window.$ = window.jQuery = jQuery;
require('bootstrap');

Vue.prototype.$http = axios;

axios.defaults.headers.common['Authorization'] = "Bearer " + document
  .querySelector('meta[name="api-token"]')
  .getAttribute("content");

Vue.use(SocialSharing);
Vue.use(Notifications);
Vue.use(Loading);

new Vue({
  router: router, // routerにはrouter.jsファイルを設定する
  components: {
    app: MainPage //MainPageコンポーネントをappで読み込む
  }
 }).$mount('#app') // routerを適用する要素を設定(マウント)する