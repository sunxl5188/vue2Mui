import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
//state访问状态对象
const state = {
	isLogin:0
}
//Mutations修改状态
const mutations = {
	//登录后保存状态
	setUserInfo(state, data) {
		sessionStorage.setItem("userInfo", data)
		sessionStorage.setItem("isLogin", 1)
		state.userInfo = data
		state.isLogin = true
	},
	//用户退出登录
	userOut(state) {
		sessionStorage.removeItem("userInfo")
		sessionStorage.removeItem("isLogin")
		state.userInfo = ""
		state.isLogin = false
	}
}
//getters计算过滤操作
const getters = {
	//判断用户是否登录
	isLogin(state) {
		var islogin = sessionStorage.getItem("isLogin")
		var userinfo = sessionStorage.getItem("userInfo")

		if (islogin == "1") {
			userinfo = JSON.parse(userinfo)
			state.userInfo = userinfo
			state.isLogin = islogin
		}
		if (islogin == "0") {
			state.userInfo = ""
			state.isLogin = 0
		}
		return state.isLogin
	}
}
//actions异步修改状态
const actions = {
	/*addAction({commit}) {
        commit('add');
    }*/
}

/*
//module模块组
const moduleA = {
    state, mutations, getters, actions
}

export default new Vuex.Store({
    modules:{ma:moduleA}
})*/

export default new Vuex.Store({
	state, mutations, getters, actions
})