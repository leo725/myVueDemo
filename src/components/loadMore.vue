<template lang="html">
  <div class="loadMore" >
    <div  v-show='isShow'>
      <mu-circular-progress :size="24" color='#0088CC'/>
      <p>加载中...</p>
    </div>
    <div v-show='noData' class="no_data">没有数据啦~</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isShow:true,
      noData:true
    }
  },
  created(){
    window.onscroll=function () {
      console.log(1)
    }
  },
  methods:{

  }
}
</script>

<style lang="css">
.loadMore{text-align: center;}
.loadMore p{font-size: 0.8rem;color:#999;}
.no_data{color:#999;}
</style>
