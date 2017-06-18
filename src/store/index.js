import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import auth from './auth/';
import modal from './modal/';
import msg from './msg/';
import user from './user/';

module.exports = new Vuex.Store({
    modules: {
        auth,
        modal,
        msg,
        user,
    }
});