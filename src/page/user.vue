<template lang="html">
  <div>
    <div class="userInfo">
      <img src="../assets/logo.png" alt="">
      <p class="user_name">{{userName}}</p>
      <div>
        <a href="#/login" class="logins" v-show='isLogined'>登录</a>
        <a href="" class="logins" v-show='!isLogined'>注销</a>
      </div>
    </div>
    <div class="subBox">
      <mu-raised-button label='设置' icon='android' href='#/user/userList1'></mu-raised-button>
      <mu-raised-button label='我的' icon='android' href='#/user/userList2'></mu-raised-button>
      <router-link :to="{ name: 'userList1', params: {} }">router-link标签</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      userName:'猴子派来的超人',
      isLogined:true
    }
  },
  created(){
    if(this.userName){
      this.isLogined=true;
    }else{
      this.isLogined=false;
    }
  }
}
</script>

<style lang="css">
.userInfo{text-align: center;width: 100%;padding:40px 0 20px;background-color: #444444;}
.userInfo>img{width:80px;height: 80px;border-radius: 50%;background-color: #eee;border:1px solid #fff;}
.user_name{color:#fff;}
.logins{display: inline-block;color:#ccc;padding:0px 15px;border:1px solid #aaa;border-radius:1rem;}
</style>
