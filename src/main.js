// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 1用vue
import Vue from 'vue'
import common from './style/base/common.css'

import Vuex from 'vuex'
Vue.use(Vuex)
// 1引用路由
import VueRouter from 'vue-router'
// 1使用路由
Vue.use(VueRouter)
// 1入口文件为 src/App.vue 文件 所以要引用
import App from './App'
// 1引用路由配置文件
import routes from './config/routes'
// 2引用api文件
import api from './config/api'

// 首页
import index from './page/index.vue' //列表页面
import detail from './page/index/detail.vue'
// 收藏
import love from './page/love' // 收藏
// 发现
import find from './page/find' // 发现
// 我的
import user from './page/user'
import userList1 from './page/user/userList1'
import userList2 from './page/user/userList2'
import login from './page/user/login'
import goToLogin from './page/goToLogin.vue'
// 2将API方法绑定到全局
Vue.prototype.$api=api
// 1使用配置文件规则
const router = new VueRouter({
  routes:[
    {
      path:'/',
      component:index
    },
    {
      path:'/find',
      component:find
    },
    {
      path:'/love',
      component:love,
      meta:{
        isLogin:true
      }
    },
    {
      path:'/user',
      component:user,
      children:[
        {path:'/',component:userList1},
        {path:'userList1',name:'userList1',component:userList1,meta:{isLogin:false}},
        {path:'userList2',component:userList2,meta:{isLogin:false}}
      ]
    },
    {
      path:'/detail/:id',
      component:detail
    },
    {
      path:'/login',
      component:login
    },
    {
      path:'/goToLogin',
      component:goToLogin
    }
  ]
})

router.beforeEach((to,from,next)=>{
  var isLogin=sessionStorage.getItem('isLogin');
  if (to.matched.some(record => record.meta.isLogin)) {
    if (!isLogin) {
      return next({path: '/goToLogin'})
    }
  }
  next()
})
// element-ui
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-carbon.css' // 使用 carbon 主题
Vue.use(MuseUI)

const store=new Vuex.Store({  // vuex 状态管理
  state:{ // 状态
    todos:[
      {id:1,text:'...',done:true},
      {id:2,text:'...',done:false}
    ],
    getters:{
      doneTodos:state=>{
        return state.todos.filter(todo=>todo.done);
      }
    }
  },
  mutations:{ // 变化
    increment (state){
      state.count++
    }
  }
})

// 1跑起来吧
new Vue({
  router,
  el:'#app',
  render: (h) => h(App)
})
