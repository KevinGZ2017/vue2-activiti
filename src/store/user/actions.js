import * as types from '../types'
import api from '../../api/index'
import msgAction from '../msg/actions';


export const userPage = ({ commit },data) => {

    api.userPage(data).then(function (response) {

        commit(types.USER_STATUS, {status: 1});

        const status = response.data.rows.length == 10 ? 0 : 2;

        commit(types.USER_PAGE, {
            rows: response.data.rows,
            totalCount: response.data.totalCount,
            status: status
        })

    }).catch(function (error) {

        commit(types.USER_STATUS, {status: 0});

        if (error.response) {
            msgAction.showMsg({ commit },{
                content: error.response.data.errorMsg || '网络故障',
                type: 'danger'
            })
        }

    })
}

/*const userInfo = ({ commit }, data) => {
    api.userInfo(data).then(function (response) {

        commit(types.USER_INFO, {
            own: response.data.own,
            info: response.data.info
        })

    }).catch(function (error) {
        commit(types.USER_INFO)
        console.log(error)
    })
}

const userSet = ({ commit }) => {
    api.userSet().then(function (response) {

        commit(types.USER_SET, {
            own: response.data.own,
            info: response.data.info
        })

    }).catch(function (error) {
        commit(types.USER_SET)
        console.log(error)
    })
}

const updateUser = ({ commit }, data) => {
    api.updateUser(data).then(function (response) {

        commit(types.UPDATE_USER,{
            info:response.data.info
        })

        msgAction.showMsg({ commit },{
            content: '更新成功',
            type: 'info'
        })

    }).catch(function (error) {
        if (error.response) {
            msgAction.showMsg({commit}, {
                content: error.response.data.errorMsg || '更新失败',
                type: 'danger'
            })
        }
    })
}

const updateHeader = ({ commit }, data) => {
    commit(types.UPDATE_HEADER, data)
}

const updatePassword = ({ commit }, data) => {
    api.updatePassword(data).then(function (response) {

        msgAction.showMsg({ commit },{
            content: '更新成功',
            type: 'info'
        })

    }).catch(function (error) {
        if (error.response) {
            msgAction.showMsg({commit}, {
                content: error.response.data.errorMsg || '更新失败',
                type: 'danger'
            })
        }
    })
}*/


module.exports = {
    userPage,
/*    userInfo, userSet, updateUser, updateHeader, updatePassword,*/

}

