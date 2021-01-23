<template>
  <div id="header">
    <div class="header-top">header-top</div>
    <div class="header-bottom">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" id="business-tap" data-toggle="tab" href="#business" role="tab" aria-controls="business" aria-selected="true">商業</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="entertainment-tab" data-toggle="tab" href="#entertainment" role="tab" aria-controls="entertainment" aria-selected="false">娛樂</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="general-tab" data-toggle="tab" href="#general" role="tab" aria-controls="general" aria-selected="false">生活</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="health-tab" data-toggle="tab" href="#health" role="tab" aria-controls="health" aria-selected="false">健康</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="science-tab" data-toggle="tab" href="#science" role="tab" aria-controls="science" aria-selected="false">科學</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="sports-tab" data-toggle="tab" href="#sports" role="tab" aria-controls="sports" aria-selected="false">運動</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="technology-tab" data-toggle="tab" href="#technology" role="tab" aria-controls="technology" aria-selected="false">科技</a>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="business" role="tabpanel" aria-labelledby="business-tab">business</div>
        <div class="tab-pane fade" id="entertainment" role="tabpanel" aria-labelledby="entertainment-tab">entertainment</div>
        <div class="tab-pane fade" id="general" role="tabpanel" aria-labelledby="general-tab">general</div>
        <div class="tab-pane fade" id="health" role="tabpanel" aria-labelledby="health-tab">health</div>
        <div class="tab-pane fade" id="science" role="tabpanel" aria-labelledby="science-tab">science</div>
        <div class="tab-pane fade" id="sports" role="tabpanel" aria-labelledby="sports-tab">sports</div>
        <div class="tab-pane fade" id="technology" role="tabpanel" aria-labelledby="technology-tab">technology</div>
      </div>
    </div>
  </div>
</template>

<script>
// import $ from 'jquery'
import axios from 'axios'

export default {
  name: 'App',
  components: {
  },
  data(){
    return {
      isLoaded: false,
      articles: [],
    };
  },
  methods: {
    getData(){
      // $('.test').html(this.$store.state.name);
      axios.get('http://newsapi.org/v2/top-headlines?country=tw&category=sports&q=中職&apiKey=e2bf3fd617ed4cf5b9db677de93f150f')
      .then((res) => {
        console.log(res.data.articles);
        this.isLoaded = true;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    },
  },
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

#header {
  .header-top {
    padding: 10px 0;
    margin-bottom: 5px;
    text-align: center;
    background: #00abfa;
    color: white;
    font-size: 20px;
  }
  .header-bottom {
    #myTab {
      display: flex;
      li {
        flex-grow: 1;
        text-align: center;
      }
    }
  }
}


</style>
