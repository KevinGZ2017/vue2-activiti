import * as types from '../types'

module.exports = {

    [types.SHOW_MODAL](state, data){
        state.name = data.name;
        state.info = data.info;
        state.confirm = false;
        state.status = true;
    },

    [types.HIDE_MODAL](state, data){
        state.confirm = data || false;
        state.status = false;
    }
};