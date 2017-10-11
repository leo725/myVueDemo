<template>
  <div class="go_top" @click='goTop' v-show='isShow'>
    回<br>到<br>顶<br>部
  </div>
</template>
<script type="text/javascript">
export default {
  data(){
    return {
      isShow:false
    }
  },
  created(){
    var v=this;
    window.onscroll=function () {
      var window_h=document.documentElement.clientHeight;
      var scroll_h=document.body.scrollTop;
      if(scroll_h>window_h/2){
        v.isShow=true;
      }else{
        v.isShow=false;
      }
    }
  },
  methods:{
    goTop:function () {
      document.body.scrollTop=0;
    }
  }
}
</script>
<style media="screen">
  .go_top{position: fixed;right: 0;bottom:20%;width:30px;padding:10px 2px;color:#999;text-align: center;border-top-left-radius: 10px;border-bottom-left-radius: 10px;border:1px solid #eee;border-right: 0;background-color: #f6f6f6;}
</style>
