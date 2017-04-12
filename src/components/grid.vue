<template>
  <div class="grid">
    <div class="bar">
      <a class="list-icon" v-bind:class="{ 'active': layout == 'list'}" v-on:click="layout = 'list'">list</a>
      <a class="grid-icon" v-bind:class="{ 'active': layout == 'grid'}" v-on:click="layout = 'grid'">grid</a>
    </div>
    <ul v-if="layout == 'grid'" class="grid">
      <li v-for="a in articles">
        <a v-bind:href="a.url" target="_blank">{{ a.title }}</a>
      </li>
    </ul>
    <ul v-if="layout == 'list'" class="list">
      <li v-for="a in articles">
        <a v-bind:href="a.url" target="_blank"></a>
        <p>{{ a.title }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'grid',
    data () {
      return {
        layout: 'grid',
        articles: [
          {
            title: 'What You Need To Know About CSS Variables',
            url: 'http://tutorialzine.com/2016/03/what-you-need-to-know-about-css-variables'
          },
          {
            title: 'Freebie: 4 Great Looking Pricing Tables',
            url: 'http://tutorialzine.com/2016/02/freebie-4-great-looking-pricing-tables'
          },
          {
            title: '20 Interesting JavaScript and CSS Libraries for February 2016',
            url: 'http://tutorialzine.com/2016/02/20-interesting-javascript-and-css-libraries-for-february-2016'
          }
        ]
      }
    }
  }
</script>
<style scoped>
  .grid{ width: 800px; margin: 0 auto; padding: 0px;}
  ul,li{ list-style: none;}
  ul.list{
    list-style: none;
    width: 500px;
    margin: 0 auto;
    text-align: left;
  }

  ul.list li{
    border-bottom: 1px solid #ddd;
    padding: 10px;
    overflow: hidden;
  }

  ul.list li img{
    width:120px;
    height:120px;
    float:left;
    border:none;
  }

  ul.list li p{
    margin-left: 135px;
    font-weight: bold;
    color:#6e7a7f;
  }

  /*-------------------------
      Grid layout
  --------------------------*/

  ul.grid{
    list-style: none;
    width: 570px;
    margin: 0 auto;
    text-align: left;
  }

  ul.grid li{
    padding: 2px;
    float:left;
  }

  ul.grid li img{
    width:280px;
    height:280px;
    object-fit: cover;
    display:block;
    border:none;
  }
</style>
