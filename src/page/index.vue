<template>
  <div>
    <div class="search">
      <img src="../assets/images/logo.svg" alt="">
      <input type="text" id='search'>
    </div>
    <mu-tabs :value='activeTab' @change="tabChange">
      <mu-tab value='all' title='全部'></mu-tab>
      <mu-tab value='good' title='精华'></mu-tab>
      <mu-tab value='share' title='分享'></mu-tab>
      <mu-tab value='ask' title='问答'></mu-tab>
      <mu-tab value='job' title='招聘'></mu-tab>
    </mu-tabs>
    <mu-list>
      <mu-list-item
        v-for='(item,index) in lists'
        v-bind:title='item.title'
        :key='item.id' :href="'#/detail/'+item.id"
        titleClass='list_title'
        :describeText='item.reply_count+"/"+item.visit_count'
        describeTextClass='list_num'
        :afterText='item.rightText'
        :afterTextClass='item.rightTextClass'
      >
        <img :src="item.author.avatar_url" alt="" slot='left' class="list_img">
      </mu-list-item>
    </mu-list>
    <mu-pagination :total='total' :current='current' @pageChange='handleClick' :pageSize='20' class="page-box"></mu-pagination>
    <!-- <load-more></load-more> -->
    <go-top></go-top>
  </div>
</template>
<script>
  import goTop from '../components/goTop.vue' // 引入组件
  //import loadMore from '../components/loadMore.vue' //加载更多
  export default {
    data (){
      return {
        lists:[],
        total:100,
        current:1,
        activeTab:'all'
      }
    },
    components:{goTop},
    created(){
      // 组件创建完后获取数据，这里和1.0不一样，改成了这个样子
      this.get_data({page:1,tab:'',limit:20});
    },
    methods:{
      get_data:function (params) {
        var v=this;
        if(!params) params={}
        v.$api.get('https://cnodejs.org/api/v1/topics',params,function (res) {
          v.lists=res.data;
          for (var i = 0; i < res.data.length; i++) {
            v.lists[i].rightTextClass='right_gray';
            if(res.data[i].top){
              v.lists[i].rightText='置顶';
              v.lists[i].rightTextClass='right_green';
            }else if(res.data[i].good){
              v.lists[i].rightText='精华';
              v.lists[i].rightTextClass='right_green';
            }else if(res.data[i].tab=='share'){
              v.lists[i].rightText='分享';
            }else if(res.data[i].tab=='ask'){
              v.lists[i].rightText='问答';
            }else{
              v.lists[i].rightText='招聘';
            }
          }
        })
      },
      handleClick:function(e){
        var v=this;
        v.current+=1;
        var params={
          page:v.current+1,
          tab:'',
          limit:20
        }
        v.get_data(params);
      },
      tabChange:function (val) {
        this.activeTab=val;
        this.get_data({page:1,tab:val,limit:20});
      }
    }
  }
</script>
<style media="screen">
  .search{text-align: center;background-color: #444444;padding:10px 0;}
  .search img{height:1.8rem;display: block;margin: 0 auto;vertical-align: middle; margin-top: 10px;margin-bottom:10px;}
  .search input{width:60%;height: 26px;border-radius: 13px;border:none;padding:0 20px;background:#fff url(../assets/images/search.png) no-repeat 2px center;font-size: 0.8rem}
  .page-box{margin-bottom: 10px;}
  .list_img{width:30px;height: 30px;border-radius: 5px;}
  .info_tab{font-size: 0.6rem;}
  .list_num{color:#999;font-size: 0.7rem;}
  .list_title{white-space: nowrap;text-overflow: ellipsis;overflow: hidden;}
  .right_green,.right_gray{display: inline-block;padding:3px 5px;font-size: 0.8rem;border-radius: 5px;}
  .right_green{background: #80BD01;color: #fff;}
  .right_gray{background: #E5E5E5;color: #999;}
</style>
