import * as types from '../types'

module.exports = {

    [types.SHOW_MSG](state, data){
        state.message.push(data)
    },

    [types.HIDE_MSG](state, id){
        state.message = state.message.filter(m => m.id !== id)
    }

};