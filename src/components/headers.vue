<template>
  <div class="layout">
    <div class="layout-ceiling">
      <div class="titleContent">后台资讯系统</div>
      <div class="layout-ceiling-main">
        <slot name="b" :todo="todo"></slot>
        <Avatar icon="ios-person" />
        <slot name="a"></slot>
        <a href="#" style="color: #fff" v-if="username===null" @click="$router.push('/login')">登录/注册</a>
        <a href="#" style="color: #fff" v-if="username!==null">{{username}}</a> |
        <a href="#">帮助中心</a> |
        <a href="#">安全中心</a> |
        <a @click="$router.push('/login')">退出</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headers',

  data () {
    return {
      username: '',
      todo:'我是header'
    }
  },
  mounted () {

      this.username = sessionStorage.getItem('username')


    // console.log(this.username)
  }
}
</script>

<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-header{
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
  .layout-ceiling{
    background: #464c5b;
    padding: 10px 0;
    overflow: hidden;
  }
  .titleContent{
    float: left;
    margin-left: 20px;
    color: #fff;
    font-size: 30px;
  }
  .layout-ceiling-main{
    float: right;
    margin-right: 15px;
  }
  .layout-ceiling-main a{
    color: #9ba7b5;
    font-size: 16px;
    line-height: 45px;
  }
</style>
