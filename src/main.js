import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

import './assets/css/common.css'
import './assets/css/iconfont.css'

/* iView */
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);

/* element */
/*import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI);*/

var app = new Vue({
    el: '#app',
    router,
    store,
    ...App,
});
