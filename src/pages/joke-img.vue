<template>
  <div class='joke-content'>
    <div class='joke-title'>{{title}}</div>
    <div class='content-item' v-for='item in items'>
      <img v-bind:src="item.img" width="100%" />
      <p>{{item.imgtitle}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'joke-img',
    data () {
      return {
        title: '内涵笑话',
        items: [
          {
            img: './static/1.png',
            imgtitle: '从前有一座山山里有一座庙1'
          },
          {
            img: './static/2.png',
            imgtitle: '从前有一座山山里有一座庙2'
          }
        ]
      }
    }
  }
</script>
<style scoped>
  .joke-content {
    margin: 0;
    padding: 40px 0;
    position: relative;
  }
  .joke-title{
    text-align:center;
    position: fixed;
    top:0;
    width:100%;
    color: #f6f6f6;
    font-size: 20px;
    background: #2f6fad;
    text-align: center;
    line-height: 40px;
    font-family: cursive;
  }
  .content-item{
    padding:10px 10px;
    border-bottom:1px solid #cdcdcd
  }
</style>
