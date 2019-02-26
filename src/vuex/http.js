// https://www.jianshu.com/p/7a9fbcbb1114
class http {
	constructor() {
		this.baseUrl = "http://localhost"
		this.timeout = 5000
		this.responseType = "json"
		this.headers = {"X-Requested-With": "XMLHttpRequest"}
	}

	// 输出错误
	getError(error) {
		console.error(error, "+++++++++++++++")
		return false
	}

	get(url, params, callback) {
		return this.requestAll(url, params, "get", callback)
	}

	post(url, params, callback) {
		return this.requestAll(url, params, "post", callback)
	}

	requestAll(url, params, method, callback) {
		let _this = this
		var config = {
			url: this.baseUrl + url,
			method: method || "get",
			baseURL: this.baseUrl,
			headers: this.headers,
			params: params,
			responseType: this.responseType,
			timeout: this.timeout
		}
		axios.interceptors.request.use(config => {
			var token = ""
			if (typeof Cookies.get("token") !== "undefined") {
				token = Cookies.get("token")
				config.headers.token = token
			}
			config.data = JSON.stringify(config.data)
			return config
		}, error => {
			_this.getError(error)
		})
		axios.interceptors.response.use(response => {
			// 当返回信息为未登录或者登录失效的时候重定向为登录页面
			if (response.data.code === "W_100004" || response.data.message === "用户未登录或登录超时，请登录！") {
				router.push({
					path: "/",
					querry: {
						redirect: router.currentRoute.fullPath
					} // 从哪个页面跳转
				})
			}
			return response
		}, error => {
			_this.getError(error)
		})
		axios(config).then(function (response) {
			if (Object.prototype.toString.call(callback) === "[object Function]") {
				if (response !== undefined) {
					callback(response.data)
				}
			}
		}).catch(function (error) {
			_this.getError(error)
		})
	}
}

export default http
