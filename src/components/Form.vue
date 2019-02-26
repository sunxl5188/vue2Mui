<template>
    <div>
        <form class="mui-input-group" name="myform" id="myform" action="" method="post" @submit.prevent="validateBeforeSubmit">


            <div :class="{'mui-input-row':true,'is-danger':errors.has('date')}">
                <label>日期</label>
                <input type="text" name="date" id="date" @click="showDtPicker($event)" class="mui-input-clear"
                       placeholder="请输入mobile" v-model="money"
                       v-validate="'required|date'">
            </div>
            <div class="validationTip" v-show="errors.has('date')"><i></i><span
                    class="is-danger">{{ errors.first("date") }}</span></div>

            <div :class="{'mui-input-row':true,'is-danger':errors.has('email')}">
                <label>邮箱</label>
                <input type="text" name="email" class="mui-input-clear" placeholder="请输入邮箱" v-model="email"
                       v-validate="'required|email'">
            </div>
            <div class="validationTip" v-show="errors.has('email')"><i></i><span class="is-danger">{{ errors.first("email") }}</span>
            </div>
            <div class="mui-input-row">
                <label>密码</label>
                <input type="password" class="mui-input-password" placeholder="请输入密码">
            </div>
            <div class="mui-input-row mui-search">
                <input type="search" name="" id="" class="mui-input-clear" placeholder="请输入"/>
            </div>
            <!--<div class="mui-input-row mui-search">
                <input type="text" name="" id="" class="mui-input-speech" placeholder="" />
            </div>-->
            <div class="mui-input-row mui-checkbox mui-left">
                <label for="checkbox1">多选</label>
                <input name="checkbox1" id="checkbox1" type="checkbox" checked="checked">
            </div>
            <div class="mui-input-row mui-checkbox mui-left">
                <label for="checkbox2">多选</label>
                <input name="checkbox1" id="checkbox2" type="checkbox">
            </div>

            <div class="mui-input-row mui-radio mui-left">
                <label for="radio1">单选</label>
                <input type="radio" id="radio1" name="radio1" value="1" checked="checked"/>
            </div>
            <div class="mui-input-row mui-radio mui-left">
                <label for="radio2">单选</label>
                <input type="radio" id="radio2" name="radio1" value="2"/>
            </div>
            <div class="mui-input-row mui-radio mui-left">
                <label for="radio3">单选</label>
                <input type="radio" id="radio3" name="radio1" value="3" disabled="disabled"/>
            </div>
            <div class="mui-button-row">
                <button type="submit" class="mui-btn mui-btn-primary">确认</button>
                <button type="button" class="mui-btn mui-btn-danger">取消</button>
            </div>
        </form>
    </div>
</template>

<script>
	import "../assets/js/VeeValidateConfig"
	export default {
		name: "Form",
		data () {
			return {
				email: "",
				qq: "",
				idCard: "",
				mobile: "",
				money: ""
			}
		},
			mounted: function () {
				// mui.init()
			},
			methods: {
				/*validateBeforeSubmit () {
					this.$validator.validateAll().then((result) => {
						if (result) {
							alert("提交数据!")
							return
						}
						alert("纠正他们的错误!")
					})
				},
				showDtPicker: function (event) {
					let $this = this
					let eve = event.currentTarget
					let dtPicker = new mui.DtPicker({
						type: "date" // datetime  date  time  month  hour
					})
					dtPicker.show(function (e) {
						$this.money = e.value
					})
				}*/
			}
	}
</script>

<style scoped>

</style>