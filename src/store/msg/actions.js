import * as types from '../types'

const showMsg = ({ commit }, data) => {
    const id = new Date().getTime()
    data.id = id
    commit(types.SHOW_MSG, data)
    setTimeout(() => commit(types.HIDE_MSG, id), 5000)
}

const hideMsg = ({ commit }, id) => {
    commit(types.HIDE_MSG, id)
}

module.exports = {
    showMsg, hideMsg
}