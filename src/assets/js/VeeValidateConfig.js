/**
 * https://baianat.github.io/vee-validate/guide/rules.html#after
 * after{target} - 比target要大的一个合法日期，格式(DD/MM/YYYY)
 * alpha - 只包含英文字符
 * alpha_dash - 可以包含英文、数字、下划线、破折号
 * alpha_num - 可以包含英文和数字
 * before:{target} - 和after相反
 * between:{min},{max} - 在min和max之间的数字
 * confirmed:{target} - 必须和target一样
 * date_between:{min,max} - 日期在min和max之间
 * date_format:{format} - 合法的format格式化日期
 * decimal:{decimals?} - 数字，而且是decimals进制
 * digits:{length} - 长度为length的数字
 * dimensions:{width},{height} - 符合宽高规定的图片
 * email - 不解释
 * ext:[extensions] - 后缀名
 * image - 图片
 * in:[list] - 包含在数组list内的值
 * ip - ipv4地址
 * max:{length} - 最大长度为length的字符
 * mimes:[list] - 文件类型
 * min - max相反
 * mot_in - in相反
 * numeric - 只允许数字
 * regex:{pattern} - 值必须符合正则pattern
 * required - 不解释
 * size:{kb} - 文件大小不超过
 * url:{domain?} - (指定域名的)url
 */
import Vue from "vue"
import zh_CN from "vee-validate/dist/locale/zh_CN"
import VeeValidate, { Validator } from "vee-validate"

// 加载中文提示
Validator.localize("zh_CN", zh_CN)

// 自定义错误提示
const dictionary = {
	zh_CN: {
		messages: {
			// required: (name) => `${name}不能为空!`
			required: () => "必填字段不能为空!"
		},
		attributes: {
			email: "邮箱地址",
			qq: "QQ",
			idCard: "身份证",
			mobile: "手机号",
			money: "数字",
			date: "日期",
			password: "密码",
			mobileCode:"验证码",
			confirmed:"确认码"
		},
		custom: {}
	}
}
Validator.localize(dictionary)

// 字段特定的自定义消息
const dict = {
	custom: {
		email: {
			required: "邮箱地址不能为空",
		}
	}
}

Validator.localize("zh_CN", dict)

const config = {
	aria: true,
	classNames: {},
	classes: false,
	delay: 200,
	dictionary: null,
	errorBagName: "errors", // change if property conflicts
	events: "input|keyup",
	fieldsBagName: "fields",
	i18n: null, // the vue-i18n plugin instance
	i18nRootKey: "validations", // the nested key under which the validation messages will be located
	inject: true,
	locale: "zh_CN",
	validity: false
}

// 自定义规则
// QQ号
Validator.extend("qq", {
	getMessage: field => "请输入正确的QQ号",
	validate: value => {
		return /^[1-9][0-9]{4,14}$/.test(value)
	}
})
// 手机号
Validator.extend("mobile", {
	getMessage: field => "请输入正确的手机号码",
	validate: value => value.length === 11 && /^1[3-8][0-9]{9}$/.test(value)
})
// 18位或带X身份证号
Validator.extend("idCard", {
	getMessage: field => "请输入18位正确的身份证号",
	validate: value => /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|31)|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$/.test(value)
})
// 正整数或带两位小数验证货币
Validator.extend("money", {
	getMessage: field => "请输入正确的数字",
	validate: value => /^[1-9]\d*\.\d{2}|^0\.\d[1-9]{1}|^0\.[1-9][\d]{1}|^[1-9]\d*$/.test(value)
})
// 日期 YYYY/MM/DD
Validator.extend("date", {
	getMessage: field => "日期格式不正确",
	validate: value => /^(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})(-|\/)(((0[13578]|1[02])(-|\/)(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02(-|\/)(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))(-|\/)02(-|\/)29)$/.test(value)
})
Validator.extend("password", {
	getMessage: field => "密码格式不正确",
	validate: value => /^[a-zA-Z][\w]{5,17}$|^[a-zA-Z][\w~!@#$%^&*();:'"|/|+\-\\<>,.`_]{5,17}$/.test(value)
})
Validator.extend("confirmed", {
	getMessage: field => "密码与确认码不一至",
	validate: (value, obj) => {
		if(document.getElementsByName(obj[0])[0].value === value){
			return true
		} else {
			return false
		}
	}
})

Vue.use(VeeValidate, config)
