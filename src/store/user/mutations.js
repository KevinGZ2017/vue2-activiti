import * as types from '../types'

module.exports = {

    [types.USER_PAGE](state, data){
        //state.rows = state.rows.concat(data.rows);
        state.page.rows = data.rows;
        state.page.totalCount = data.totalCount;
        state.status = data.status;
    },

/*    [types.USER_INFO](state, data) {
        state.own = data.own;
        state.info = data.info;
    },

    [types.USER_SET](state, data) {
        state.own = data.own;
        state.info = data.info;
    },

    [types.UPDATE_USER](state, data) {
        state.info = data.info;
    },

    [types.UPDATE_HEADER](state, data) {
        state.info.header = data.url;
    },

    [types.USER_STATUS](state, data){
        state.status = data.status;
    },*/

};