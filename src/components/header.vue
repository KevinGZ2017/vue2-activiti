<template>
    <div class="header">
        <div class="container">
            <div class="logo"><router-link to="/"><img src="/static/img/logo.png" alt="流程平台" width="150" height="50"></router-link></div>
            <div class="nav_category" @click="toggleNav"><i class="iconfont icon-category"></i></div>
            <div class="nav clearfix">
                <ul>
                    <li><router-link to="/"  class="nav_a" active-class="nav_active" exact>主页</router-link></li>
                    <li><router-link to="/user" class="nav_a" active-class="nav_active">用户管理</router-link></li>
                    <li v-if="!getAuth"><router-link to="/login" class="nav_a" active-class="nav_active">登录</router-link></li>
                    <li v-else>
                        <a href="javascript:void(0)" class="nav_user">
                            <img :src="getAuth.header" class="circle" width="30" height="30"> {{getAuth.nickname}}
                            <ul class="nav_user_ul">
<!--                                <li><router-link :to="{ name: 'userIndex', params: { uid: getAuth.id }}">我的主页</router-link></li>-->
                                <li><router-link to="/set/">管理中心</router-link></li>
                                <li class="nav_user_line"></li>
                                <li><a href="javascript:void(0)" class="text-center" @click="logout()">退出</a></li>
                            </ul>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        data(){
            return {
                showNav: false
            }
        },
        computed: {
            ...mapGetters({
                getToken: 'getToken',
                getAuth:'getAuth'
            })
        },
        mounted(){
            if(this.getToken){
                this.$store.dispatch('authInfo');
            }
        },
        methods:{
            logout(){
                this.$store.dispatch('logout');
            },
            toggleNav(){
                this.showNav = !this.showNav;
            }
        }
    }
</script>
