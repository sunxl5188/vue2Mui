// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "animate.css/animate.min.css"
import "../static/css/mui.css"
import "../static/css/vue2mui.css"
import flexible from "../static/js/flexible"
import Vue from "vue"
import App from "./App"
import router from "./router"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: "#app",
	router, flexible,
	components: {App},
	template: "<App/>"
})
