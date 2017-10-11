<template>
  <div>

    <v-header :title-text='title'></v-header>
    <!-- 主要内容 -->
    <router-view class="view" keep-alive transition transition-mode='out-in'>

    </router-view>
    <!-- 底部tabs -->
    <mu-paper class="fixed-bottom">
      <mu-bottom-nav :value="bottomNav" shift @change="handleChange" >
        <mu-bottom-nav-item value="news" title="社区" icon="home" href='#/'/>
        <mu-bottom-nav-item value="find" title="发现" icon="fingerprint" href='#/find'/>
        <mu-bottom-nav-item value="love" title="收藏" icon="stars" href='#/love'/>
        <mu-bottom-nav-item value="user" title="我的" icon="person" href='#/user'/>
      </mu-bottom-nav>
    </mu-paper>
  </div>
</template>
<script>
  import vHeader from './components/header.vue' // 引入组件
  export default{
    name:'app',
    data:function () {
      return {
        title:'最新文章',
        bottomNav:'news'
      }
    },
    components:{vHeader}, // 注册组件 通过标签<v-header></v-header>
    methods:{
      handleChange:function (val) {
        this.bottomNav = val;
        this.title=
        val=='news'?'最新文章':
        val=='find'?'发现精彩':
        val=='love'?'我的收藏':
        '个人中心'
      }
    }
  }
</script>
<style>
  .fixed-bottom{position: fixed;bottom:0;z-index: 10;width: 100%;}
  .tab-title{font-size: 0.5rem;margin-top:0}
  body{padding-top:45px;padding-bottom:71px;}
</style>
