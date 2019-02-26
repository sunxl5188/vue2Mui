<template>
    <div>
        <div id="pullrefresh" class="mui-content mui-scroll-wrapper" style="margin-top:45px;">
            <div class="mui-scroll">
                <!--数据列表-->
                <ul class="mui-table-view mui-table-view-chevron">
                    <li class="mui-table-view-cell" v-for="item in listDate">
                        <a href="" class="mui-navigate-right">Item {{ item }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: "ListLoad",
		data () {
			return {
				listDate: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
			}
		},
		created () {

		},
		beforeCreate () {

		},
		mounted () {
			mui(".mui-scroll-wrapper").scroll({
				scrollY: true, // 是否竖向滚动
				scrollX: false, // 是否横向滚动
				startX: 0, // 初始化时滚动至x
				startY: 0, // 初始化时滚动至y
				indicators: true, // 是否显示滚动条
				deceleration: 0.0006, // 阻尼系数,系数越小滑动越灵敏
				bounce: true // 是否启用回弹
			})
			mui.init({
				pullRefresh: {
					container: "#pullrefresh",
					down: {
						callback: this.pulldownRefresh
					},
					up: {
						contentrefresh: "正在加载...",
						callback: this.pullupRefresh
					}
				}
			})
		},
		methods: {

		}
	}
</script>

<style scoped>

</style>