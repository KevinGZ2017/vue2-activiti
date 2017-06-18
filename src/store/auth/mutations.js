import * as types from '../types'

module.exports = {

    [types.AUTH_INFO](state, data) {
        state.token = data.token;
        state.info = data.info;
    },

    [types.USER_LOGIN](state, data) {
        localStorage.setItem('user', data.token);
        state.token = data.token;
    },

    [types.USER_LOGOUT](state) {
        localStorage.removeItem('user');
        state.token = null;
        state.info = null;
    }
};