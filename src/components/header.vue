<template lang="html">
  <div class="fixed-top">
    <!-- 标题 -->
    <mu-appbar>
      <mu-icon-button icon="chevron_left" slot="left" href='javascript:history.go(-1)'/>
      {{titleText}}
    </mu-appbar>
  </div>
</template>

<script>
export default {
  data(){
    return {
      
    }
  },
  props:['titleText']
}
</script>

<style lang="css">
.fixed-top{position: fixed;top:0;width: 100%;z-index: 999;}
</style>
