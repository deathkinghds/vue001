//入口文件
import Vue from 'vue'

//1.1导入路由的包
import VueRouter from 'vue-router'

//1.2安装路由
Vue.use(VueRouter)

//2.1导入vue-resource
import VueResource from 'vue-resource'

//2.2安装vue-resource
Vue.use(VueResource)

//导入格式化时间的插件
import moment from 'moment'

//定义全局的过滤器
/*
Vue.fileter('dateFormat', function (dataStr, pattern="YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
})*/

//设置请求的根路径
Vue.http.options.root = '/http:/vue.studyit.io';

//导入MUI 的样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

//按需导入Mint-UI中的组件
import { Header, Swipe, SwipeItem, Button } from 'mint-ui'
//注册导入的组件
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)

//1.3导入自己的router.js 路由模块
import router from './router.js'

//导入 App 根组件
import app from './App.vue'

var vm = new Vue({
    el : '#app',
    render : c => c(app),
    //1.4挂载路由对象到VM实例上
    router
})
