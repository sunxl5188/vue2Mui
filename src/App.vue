<template>
    <div id="app">
        <div style="width: 100%;position: fixed;top: 0;left: 0;z-index: 1000;background: #fff;">
            <router-link to="/">首页</router-link>
            <router-link to="/about.html">关于我们</router-link>
            <router-link to="/form.html">表单验证</router-link>
            <router-link to="/list.html">列表页面</router-link>
            <router-link to="/bieming.html">404</router-link>
        </div>
        <transition name="custom-classes-transition" enter-active-class="animated fadeIn" leave-class="animated fadeOut">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
        </transition>

        <transition name="custom-classes-transition" enter-active-class="animated fadeIn" leave-class="animated fadeOut">
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </transition>
    </div>
</template>
<script>
    export default {
        name:'App'
    }
</script>