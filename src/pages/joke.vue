<template>
  <div class='joke-content'>
    <div class='joke-title'>{{title}}</div>
    <div class='content-item' v-for='item in items'>
      <h3>{{item.title}}</h3>
      <p>{{item.content}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'joke',
    data () {
      return {
        title: '内涵笑话',
        items: [
          {
            title: '笑话1',
            content: '从前有一座山，山里有一座庙，庙里有两个和尚1111'
          },
          {
            title: '笑话2',
            content: '从前有一座山，山里有一座庙，庙里有两个和尚2222'
          },
          {
            title: '笑话3',
            content: '从前有一座山，山里有一座庙，庙里有两个和尚3333'
          },
          {
            title: '笑话4',
            content: '从前有一座山，山里有一座庙，庙里有两个和尚4444'
          },
          {
            title: '笑话5',
            content: '从前有一座山，山里有一座庙，庙里有两个和尚1111'
          },
          {
            title: '笑话6',
            content: '从前有一座山，山里有一座庙，庙里有两个和尚2222'
          },
          {
            title: '笑话7',
            content: '从前有一座山，山里有一座庙，庙里有两个和尚3333'
          },
          {
            title: '笑话8',
            content: '从前有一座山，山里有一座庙，庙里有两个和尚4444'
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
    border-bottom:1px solid #cdcdcd;
    font-size: 1.4rem;
  }
</style>
