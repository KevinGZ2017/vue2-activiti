import * as types from '../types'
import api from '../../api/index'
import msgAction from '../msg/actions';

const authInfo = ({ commit }) => {
    api.authInfo().then(function (response) {

        //console.log(JSON.stringify(response.data.token))
        //console.log(JSON.stringify(response.data.info))

        commit(types.AUTH_INFO, {
            token: response.data.token,
            info: response.data.info
        })

    }).catch(function (error) {
        commit(types.AUTH_INFO)
        console.log(error)
    })
}

const login = ({ commit }, data) => {
    api.localLogin(data).then(function (response) {

        var token = response.data.token

        //console.log("login action: token=" + token)

        commit(types.USER_LOGIN, {
            token: token
        });

        authInfo({ commit });

        msgAction.showMsg({ commit },{
            content: '登录成功',
            type: 'info'
        })

    }).catch(function (error) {
        if (error.response) {
            msgAction.showMsg({ commit },{
                content: error.response.data.errorMsg || '登录失败',
                type: 'danger'
            })
        }
    })
}

const logout = ({ commit }) => {
    commit(types.USER_LOGOUT);
    window.location.pathname = '/login'
}

module.exports = {
    authInfo, login, logout
}

