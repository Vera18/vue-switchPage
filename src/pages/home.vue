<template>
  <div class="home">
    <h2 class="title">{{ message }}</h2>
  </div>
</template>
<script>
  export default {
    name: 'home',
    data () {
      return {
        message: '每天一个冷笑话'
      }
    }
  }
</script>
<style scoped>
.title{
  color: #2f6fad;
  font-size: 2rem;
  text-align: center;
  line-height: 120px;
}
.home{
  width:100%;
  height:100%;
}
</style>
