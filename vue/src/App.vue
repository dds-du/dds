<template>
  <div id="app">
    <ul class="clear">
      <!-- <li role="presentation" class="active"><router-link to="/">首页</router-link></li>
      <li role="presentation"><router-link to="/about">关于</router-link></li>
      <li role="presentation"><router-link to="/document">文档</router-link></li> -->
      <li><router-link :to="index">首页</router-link></li>
      <li><router-link to="/about">关于</router-link></li>
      <li><router-link to="/document">文档</router-link></li>
    </ul>
    <router-view class="parent"></router-view>
  </div>
</template>

<script>
export default {
  name:"app",
  data(){
    return {
      index:'/index'
    }
  }
}
</script>

<style>

</style>
