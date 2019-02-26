class fnAction {
	constructor () {
		this.ajaxUrl = "http://localhost/"
		this.headers = {"Content-Type": "application/json"}
		this.dataType = "json"
		this.timeout = 5000
		this.async = false
		this.crossDomain = false
		this.processData = true
	}

	http (url, params, method, callback) {
		if (method.toLowerCase() === "get") {
			this.headers = {"Content-Type": "x-www-form-urlencoded"}
		}
		mui.ajax(this.ajaxUrl + url, {
			data: params,
			dataType: this.dataType,
			type: method,
			timeout: this.timeout,
			async: this.async,
			crossDomain: this.crossDomain,
			processData: this.processData,
			headers: this.headers,
			success: function (data, textStatus, xhr) {
				if (Object.prototype.toString.call(callback) === "[object Function]") {
					callback(data, textStatus, xhr)
				}
			},
			error: function (xhr, type, errorThrown) {
				if (Object.prototype.toString.call(callback) === "[object Function]") {
					callback(xhr, type, errorThrown)
				}
			}
		})
	}

}

let fn = new fnAction()
export default fn
