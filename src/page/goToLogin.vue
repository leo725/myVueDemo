<template lang="html">
  <div>
    <mu-paper class="demo-paper" :zDepth="5" >
      <mu-icon value="person" :size="180" color="#8CC84B" class="block"/>
      您暂未登录<br>
      请<a href="#/login">登录</a>/<a href="#/login">注册</a>
    </mu-paper>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.demo-paper{display: block;height: 300px;width: 80%;margin: 50px auto;text-align: center;}
.block{margin: 0 auto;}
</style>
