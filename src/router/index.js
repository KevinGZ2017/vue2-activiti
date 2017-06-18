import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";

import index from "../page/index";
import login from "../page/login";
import reg from "../page/reg";
/*import user from "../page/user";
import set from "../page/set";*/

/*import userIndex from "../components/user/index";
import userAlbum from "../components/user/album";
import userTogether from "../components/user/together";
import userInfo from "../components/user/info";
import setIndex from "../components/set/index";
import setFriend from "../components/set/friend";
import setPassword from "../components/set/password";*/

import user from "../page/user/userPage"


Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: index,
        meta: { auth: true }
    },
    {
        path: '/index',
        component: index,
        meta: { auth: true }
    },
    {
        path: '/login',
        component: login,
        meta: { auth: false }
    },
    {
        path: '/reg',
        component: reg,
        meta: { auth: false }
    },
    {
        path: '/user',
        component: user,
        meta: { auth: true },
        children: [{
            path: '/:id/edit',
            name: 'userEdit',
            component: user,
            meta: { auth: false }
        }, {
            path: '/:id/view',
            name: 'userView',
            component: user,
            meta: { auth: false }
        }]
    },

/*    {
        path: '/u/:uid',
        component: user,
        children: [{
            path: '',
            name: 'userIndex',
            component: userIndex,
            meta: { auth: false }
        }, {
            path: 'album',
            name: 'userAlbum',
            component: userAlbum,
            meta: { auth: false }
        }, {
            path: 'together',
            name: 'userTogether',
            component: userTogether,
            meta: { auth: false }
        }, {
            path: 'info',
            name: 'userInfo',
            component: userInfo,
            meta: { auth: false }
        }]
    },
    {
        path : '/set',
        component : set,
        children : [{
            path: '',
            name: 'setIndex',
            component : setIndex,
        },{
            path : 'password',
            name: 'setPassword',
            component : setPassword,
        },{
            path : 'friend',
            name: 'setFriend',
            component : setFriend,
        }]
    }*/
];

const router = new VueRouter({
    mode: 'history',
    saveScrollPosition: true,
    routes
});

router.beforeEach(({meta, path}, from, next) => {
    var { auth = true } = meta;

    var isLogin = Boolean(store.state.auth.token); //true用户已登录， false用户未登录

    //console.log("store.state： " + JSON.stringify(store.state));
    //console.log("是否登录： " + isLogin);

    if (auth && !isLogin && path != '/login') {
        return next({ path: '/login' })
    }

    if(isLogin && (path == '/login' || path == '/reg')) {
        return next({ path: '/' })
    }

    next()
});

export default router;

