<template>
    <div>
        <div v-if="isLogin">已登录</div>
        <div v-else>未登录</div>
        <div>{{isLogin}}</div>
        <div>
            <button class="mui-btn" @click="setUserInfo(getuserinfo())">登录</button>
            <button class="mui-btn" @click="userOut">退出</button>
        </div>
    </div>
</template>

<script>
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
    import store from '@/vuex/Store'

    export default {
        name:"about",
        store,
        created : function(){
            this.$store.getters.isLogin;
        },
        computed:{
            ...mapState(['isLogin'])
        },
        methods:{
            ...mapMutations(['setUserInfo','userOut']),
            getuserinfo(){
                let data={
                    userId:'88',
                    userName:'张三',
                    mobile:'13122223654'
                }
                return JSON.stringify(data);
            }
        }
    }
</script>

<style scoped>

</style>