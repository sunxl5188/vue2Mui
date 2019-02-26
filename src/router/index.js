import Vue from "vue"
import Router from "vue-router"
import Home from "@/components/Home"
import About from "@/components/About"
import Form from "@/components/Form"
import List from "@/components/List"
import ListLoad from "@/components/ListLoad"
import Error from "@/components/Error"

Vue.use(Router)

//https://router.vuejs.org/zh/
export default new Router({
	mode: "history",
	base: "/",
	routes: [
		{
			path: "/", name: "Home", component: Home, meta: {
				keepAlive: true
			}
		},
		{path: "/About.html", name: "About", component: About},
		{path: "/Form.html", name: "Form", component: Form},
		{path: "/List.html", name: "List", component: List},
		{path: "/ListLoad.html", name: "ListLoad", component: ListLoad},
		//{path:'/goHome/:id', redirect:'/:id'},//重定向
		//{path:'/About.html', name:'About', component:About,alias:'/bieming.html'},//导航上直接用别名bieming.html
		{
			path: "*",
			component: Error,
			beforeEnter: (to, from, next) => {
				console.log("准备进入路由模板")
				next()
			},
			beforeRouteUpdate (to, from, next) {
				// 在当前路由改变，但是该组件被复用时调用
				// 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
				// 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
				// 可以访问组件实例 `this`
				next()
			},
			//离开需要写在模板才会执行
			beforeResolve: (to, from, next) => {
				console.log("准备离开路由模板")
				next()
			}
		}
	]
})
