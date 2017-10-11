<template lang="html">
  <mu-dialog :open='dialog' title='Dialog' @close="close">
    这是一个简单的弹出框
    <mu-flat-button slot="actions" @click='close' primary label='取消'/>
    <mu-flat-button slot="actions" @click='close' primary label='确定'/>
  </mu-dialog>
</template>

<script>
export default {
  data () {
    return {
      dialog:false
    }
  },
  methods:{
    open (){
      this.dialog=true
    },
    colos(){
      this.dislog=false
    }
  }
}
</script>

<style lang="css">
</style>
