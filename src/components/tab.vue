<template>
  <div class="tab" @click.prevent>
    <a v-for="(item, index) in items" :class="{'show': item.active}"  @click="makeActive(item, index)">{{item.name}}</a>
    <div class="tabContent" v-html="content"></div>
  </div>

</template>
<script>
  export default {
    name: 'tab',
    data () {
      return {
        content: '<ul><li>html test</li><li>html test</li><li>html test</li><li>html test</li><li>html test</li></ul>',
        items: [
          {
            name: 'Html',
            content: '<ul><li>html test</li><li>html test</li><li>html test</li><li>html test</li><li>html test</li></ul>',
            active: true
          },
          {
            name: 'Css',
            content: 'css test',
            active: false
          },
          {
            name: 'Js',
            content: 'js test',
            active: false
          },
          {
            name: 'Vue',
            content: 'vue test',
            active: false
          }
        ]
      }
    },
    methods: {
      makeActive: function (item, index) {
        this.content = item.content
        for (var i = 0; i < this.items.length; i++) {
          this.items[i].active = false
        }
        this.items[index].active = true
      }
    }
  }
</script>
<style scoped>
  .tab a{ padding: 0px 10px; cursor: pointer;}
  .tab a.show{ border-bottom: 2px solid #2f6fad;}
  .tabContent{ padding: 10px 0 0 0;}

</style>
