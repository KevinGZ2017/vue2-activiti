import axios from 'axios'
const qs = require('querystring')

const ROOT = (process.env.NODE_ENV === 'production')
    ? 'http://api.secretlove.top'
    : 'http://localhost:3001/mock';

function config() {
    const base = {
        baseURL: ROOT
    };
    if(localStorage.getItem('user') && !base.headers) {
        base.headers = {Authorization: 'Bearer ' + localStorage.getItem('user').replace(/(^\")|(\"$)/g, '')};
    }
    return base
}

export default {
    localLogin: function (data) {
        return axios.post('/auth/login', data, config())
    },
    localReg: function (data) {
        return axios.post('/user/addUser', data , config())
    },
    authInfo: function () {
        return axios.get('/auth/authInfo', config())
    },
    userPage: function (data) {
        return axios.get('/user/list', config())
    },
    userInfo: function (data) {
        return axios.get('/user/' + data + '/userInfo', config())
    },
    userSet: function () {
        return axios.get('/user/set', config())
    },
    updateUser: function (data) {
        return axios.put('/user/updateUser', data, config())
    }
}
