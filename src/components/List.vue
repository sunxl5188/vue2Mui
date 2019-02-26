<template>
    <div>
        <div class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
            <h1 class="mui-title">列表下拉加载</h1>
        </div>
        <div id="pullrefresh" class="mui-scroll-wrapper" style="margin-top:45px;">
            <div class="mui-scroll">
                <ul class="mui-table-view">
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
		name: "List",
		data () {
			return {
				listDate: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
			}
		},
		beforeCreate () {

		},
		created () {
			for (let i = mui.hooks.inits.length - 1, item; i >= 0; i--) {
				item = mui.hooks.inits[i]
				if (item.name == "pullrefresh") {
					item.repeat = true
				}
			}
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
			// 下拉刷新具体业务实现
			pulldownRefresh () {
				console.log("下拉刷新----")
				setTimeout(function () {
					let table = document.body.querySelector(".mui-table-view")
					let cells = document.body.querySelectorAll(".mui-table-view-cell")
					for (let i = cells.length, len = i + 3; i < len; i++) {
						let li = document.createElement("li")
						li.className = "mui-table-view-cell"
						li.innerHTML = "<a class=\"mui-navigate-right\">Item " + (i + 1) + "</a>"
						//下拉刷新，新纪录插到最前面；
						table.insertBefore(li, table.firstChild)
					}
					mui("#pullrefresh").pullRefresh().endPulldownToRefresh() //refresh completed
				}, 1500)
			},
			// 上拉加载具体业务实现
			pullupRefresh () {
				setTimeout(function () {
					mui("#pullrefresh").pullRefresh().endPullupToRefresh((++this.count > 2)) //参数为true代表没有更多数据了。
					let table = document.body.querySelector(".mui-table-view")
					let cells = document.body.querySelectorAll(".mui-table-view-cell")
					for (let i = cells.length, len = i + 5; i < len; i++) {
						let li = document.createElement("li")
						li.className = "mui-table-view-cell"
						li.innerHTML = "<a class=\"mui-navigate-right\">Item " + (i + 1) + "</a>"
						table.appendChild(li)
					}
				}, 1500)
			}
		}
	}

</script>

<style scoped>

</style>