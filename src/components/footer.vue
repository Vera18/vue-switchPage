<template>
  <div class="nav">
    <p class="navlist">
      <router-link class="nav-item" to="/home" active-class="n-current">首页</router-link>
      <router-link class="nav-item" to="/joke" active-class="n-current">冷笑话</router-link>
      <router-link class="nav-item" to="/joke-img" active-class="n-current">图片</router-link>
    </p>
  </div>
</template>
<style lang="less">
  .nav{
    position: fixed;
    bottom: 0;
    width: 100%;
    font-size: 1.4rem;
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
  .n-current{ background: #2f4f90;}

</style>
