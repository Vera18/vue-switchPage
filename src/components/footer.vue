<template>
  <div class="nav">
    <p class="navlist">
      <router-link class="nav-item" to="/">首页</router-link>
      <router-link class="nav-item" to="/joke">冷笑话</router-link>
      <router-link class="nav-item" to="/joke-img">图片</router-link>
    </p>
  </div>
</template>
<style lang="less">
  .nav{
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  .navlist{
    width: 100%;
    display: flex;
  }
  .nav-item{
    flex: 1;
    color:#f6f6f6;
    background: #2f6fad;
    line-height: 42px;
    text-align: center;
    display: block;
    text-decoration: none;
  }

</style>
