<template>
  <div class="total" v-cloak>
    <h2>月账核算</h2>
    <ul>
      <li v-for="item in items" @click="toggleActive(item)" :class="{'active':item.active}">{{item.name}}<span>{{item.price | currency '¥' '1'}}</span></li>
    </ul>
    <p>合计: <span>{{total() | currency '¥' '1'}}</span></p>
  </div>
</template>
<script>
  export default {
    name: 'total',
    data () {
      return {
        items: [
          {
            name: '工资',
            price: 300.281,
            active: false
          },
          {
            name: '玩具收入',
            price: 400.854,
            active: false
          },
          {
            name: '收租',
            price: 2400,
            active: false
          }
        ]
      }
    },
    methods: {
      toggleActive: function (i) {
        i.active = !i.active
      },
      total: function () {
        var total = 0
        this.items.forEach(function (s) {
          if (s.active) {
            total += s.price
          }
        })
        return total.toFixed(2)
      }
    }
  }
</script>
<style scoped>
  [v-cloak] {
    display: none;
  }
  *{
    margin:0;
    padding:0;
  }
  body{
    font-family:Microsoft YaHei;
  }
  li{list-style:none;}
  div{
    width:400px;
    background-color: #c0c0c0;
    margin:50px auto;
    padding:35px 60px;
  }
  h1{
    font-size:44px;
    text-align:center;
  }
  ul{
    font-size:20px;
    text-align:left;
    margin:20px 0 15px;
  }
  ul li{
    padding:20px 30px;
    background-color:#e35885;
    margin-bottom:8px;
    cursor:pointer;
  }
  ul li span{float:right;}
  ul li.active{
    background-color: #0b97c4;
  }
  p{
    border-top:1px solid #f6f6f6;
    padding:15px 30px;
    font-size:20px;
    text-align: left;
  }
  p span{float:right;}

</style>
