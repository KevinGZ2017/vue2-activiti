<template>
    <div>
        <div class="container pad_t150">
            <div class="row">
                <div class="col-md-6 center-block">
                    <div class="panel hover_sh clearfix">
                        <div class="panel_tit"><h4>登录</h4></div>
                        <form class="panel_body panel_form center-block" method="post" @submit.prevent="login">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="iconfont icon-account addon_icon"></i></span>
                                <input type="text" v-model="user.name" class="form-control" placeholder="用户名">
                            </div>
                            <div class="input-group">
                                <span class="input-group-addon"><i class="iconfont icon-lock addon_icon"></i></span>
                                <input type="password" v-model="user.password" class="form-control" placeholder="密码 ">
                            </div>
                            <div class="panel_form_btn">
                                <button type="submit" class="btn btn-success">登 录</button>
                            </div>
                            <p class="text-right"><router-link to="/reg">立即注册</router-link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        data (){
            return {
                user: {
                    name: '',
                    password: ''
                }
            }
        },
        computed: {
            ...mapGetters({
                getAuth: 'getAuth'
            })
        },
        methods:{
            login() {
                this.$store.dispatch('login', this.user);
            }
        },
        watch:{
            getAuth() {
                if(this.getAuth) {
                    this.$router.push('/index');
                }
            }
        }
    }
</script>
