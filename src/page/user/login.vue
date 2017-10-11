<template lang="html">
  <div class="login">
    <img src="../../assets/images/logo.jpg" alt="" c>
    <mu-text-field labelFloat label='用户名' icon='person' color='#666' fullWidth />
    <mu-text-field labelFloat label='密码' icon='lock' type='password' color='#666' fullWidth/>
    <mu-raised-button label="登录" backgroundColor='#8CC84B' class="login_btn" fullWidth	/>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.login{padding: 0 2rem;}
.login>img{height: 5rem;margin: 30px auto;display: block;}
.login_btn{margin-top: 2rem;}
</style>
