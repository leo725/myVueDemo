// 引用模板
// 首页
import index from '../page/index.vue' //列表页面
import detail from '../page/index/detail.vue'
// 收藏
import love from '../page/love' // 收藏
// 发现
import find from '../page/find' // 发现
// 我的
import user from '../page/user'
import userList1 from '../page/user/userList1'
import userList2 from '../page/user/userList2'
import login from '../page/user/login'
// 路由配置
export default [
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
      {path:'userList1',component:userList1,meta:{isLogin:true}},
      {path:'userList2',component:userList2,meta:{isLogin:true}}
    ]
  },
  {
    path:'/detail/:id',
    component:detail
  },
  {
    path:'/login',
    component:login
  }
]
