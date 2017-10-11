<template lang="html">
  <div class="detail-box">
    <h2>{{detailData.title}}</h2>
    <div class="detail-info">
      <i class="dot"></i>作者 <a :href="detailData.author.avatar_url">{{detailData.author.loginname}}</a>
      <i class="dot"></i>{{detailData.visit_count}} 次浏览
      <i class="dot"></i>发布于 {{detailData.create_at}}　
    </div>
    <div v-html='detailData.content' class="detail-content"></div>
    <div class="replies_lists">
      <p>{{detailData.replies.length}}条回复</p>
      <ul>
        <li v-for='(item,index) in detailData.replies' key='index'>
          <img :src="item.author.avatar_url" alt="">
          <span>{{item.author.loginname}}</span>
          <p class="ups">
            <mu-icon value='thumb_up' :size='15' color='#aaa' @click='isGood(item.id,$event)' v-show='isShow'></mu-icon>
            <mu-icon value='thumb_up' :size='15' color='#80BD01' @click='isGood(item.id)' v-show='!isShow'></mu-icon>
            {{item.ups.length}}
          </p>
          <p v-html='item.content' class="replies_content"></p>
        </li>
      </ul>
    </div>
    <go-top></go-top>
  </div>
</template>

<script>
import goTop from '../../components/goTop.vue'
export default {
  data(){
    return {
      detailData:{author:{},replies:[]},
      isShow:true
    }
  },
  created(){
    var id=this.$route.params.id;
    this.get_detail(id)
  },
  components:{goTop},
  methods:{
    get_detail:function (id) {
      var v=this;
      console.log('https://cnodejs.org/api/v1/topic/'+id);
      v.$api.get('https://cnodejs.org/api/v1/topic/'+id,{},function (res) {
        v.detailData=res.data;
        v.detailData.create_at=res.data.create_at.split('T')[0];
      })
    },
    isGood:function (id,event) {
      // console.log('https://cnodejs.org/api/v1/reply/'+id+'/ups')
      // this.isShow=!this.isShow;
      if(event.target.style.color=='rgb(128, 189, 1)'){
        event.target.style.color='#aaa'
      }else{
        event.target.style.color='#80BD01'
      }

      //this.$api.post('https://cnodejs.org/api/v1/reply/:'+id+'/ups',function (res) {
      //   console.log(res);
      // })
    }
  }
}
</script>

<style lang="css">
.detail-box{padding:0 15px;margin-top:20px;}
.dot{display: inline-block;width:4px;height: 4px;vertical-align:middle;border-radius: 50%;background-color: #999;margin:0 5px;}
.detail-info{font-size: 0.8rem;color: #999999;}
.detail-info a{color: #999}
.detail-content img{width:100%;}
.detail-content a{color:#0088CC !important;}
.replies_lists{margin-top: 10px;}
.replies_lists>p{margin-bottom:10px;font-weight:bold;}
.replies_lists li{padding:10px 8px;border-bottom: 1px solid #ccc;background-color: #f6f6f6;}
.replies_lists li>img{width:30px;height: 30px;vertical-align: top;}
.ups{float: right;}
.replies_content{margin-top: 10px;}
.replies_content a{color:#0088cc;}
.replies_content img{width: 100%;}
.ups_active{color:#80BD01 !important;}
</style>
