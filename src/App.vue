<template>
  <div id="header">
    <div class="header-top">header-top</div>
    <div class="header-bottom">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" id="breaking-tap" @click="getData" data-news="breaking" data-toggle="tab" href="#breaking" role="tab" aria-controls="breaking" aria-selected="true">焦點</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="business-tap" @click="getData" data-news="business" data-toggle="tab" href="#business" role="tab" aria-controls="business" aria-selected="true">商業</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="entertainment-tab" @click="getData" data-news="entertainment" data-toggle="tab" href="#entertainment" role="tab" aria-controls="entertainment" aria-selected="false">娛樂</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="world-tab" @click="getData" data-news="world" data-toggle="tab" href="#world" role="tab" aria-controls="world" aria-selected="false">國際</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="health-tab" @click="getData" data-news="health" data-toggle="tab" href="#health" role="tab" aria-controls="health" aria-selected="false">健康</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="science-tab" @click="getData" data-news="science" data-toggle="tab" href="#science" role="tab" aria-controls="science" aria-selected="false">科學</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="sports-tab" @click="getData" data-news="sports" data-toggle="tab" href="#sports" role="tab" aria-controls="sports" aria-selected="false">運動</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="technology-tab" @click="getData" data-news="technology" data-toggle="tab" href="#technology" role="tab" aria-controls="technology" aria-selected="false">科技</a>
        </li>
      </ul>
    </div>
  </div>
  <div id="content" :class="{ loading: !isLoaded }">
    <div class="loading-icon" :class="{ show: !isLoaded }"></div>
    <div class="search-bar">
      <input type="text" v-model="searchText" placeholder="搜尋新聞">
      <button @click="searchNews">search</button>
    </div>
    <div class="news-items">
      <div v-if="!isSearched" class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="breaking" role="tabpanel" aria-labelledby="breaking-tab">
          <div class="row">
            <div class="col-12 col-md-6 my-3" v-for="(news, index) in articles['breaking']" :key="index">
              <a :href="news.url" target="_blank" class="news-box">
                <div class="thumbnail">
                  <img :src="news.image" alt="thumbnail">
                </div>
                <div class="info">
                  <div class="title">{{ news.title }}</div>
                  <div class="desc">{{ news.description}}</div>
                  <div class="other">
                    <span class="pushdate">{{ news.publishedAt.slice(0, 10) }}</span>
                    <span class="pushTime">{{ news.publishedAt.slice(-9, -1) }}</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="business" role="tabpanel" aria-labelledby="business-tab">
          <div class="row" v-if="isLoaded">
            <div class="col-12 col-md-6 my-3" v-for="(news, index) in articles['business']" :key="index">
              <a :href="news.url" target="_blank" class="news-box">
                <div class="thumbnail">
                  <img :src="news.image" alt="thumbnail">
                </div>
                <div class="info">
                  <div class="title">{{ news.title }}</div>
                  <div class="desc">{{ news.description}}</div>
                  <div class="other">
                    <span class="pushdate">{{ news.publishedAt.slice(0, 10) }}</span>
                    <span class="pushTime">{{ news.publishedAt.slice(-9, -1) }}</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="entertainment" role="tabpanel" aria-labelledby="entertainment-tab">
          <div class="row" v-if="isLoaded">
            <div class="col-12 col-md-6 my-3" v-for="(news, index) in articles['entertainment']" :key="index">
              <a :href="news.url" target="_blank" class="news-box d-flex">
                <div class="thumbnail">
                  <img :src="news.image" alt="thumbnail">
                </div>
                <div class="info">
                  <div class="title">{{ news.title }}</div>
                  <div class="desc">{{ news.description}}</div>
                  <div class="other">
                    <span class="pushdate">{{ news.publishedAt.slice(0, 10) }}</span>
                    <span class="pushTime">{{ news.publishedAt.slice(-9, -1) }}</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="world" role="tabpanel" aria-labelledby="world-tab">
          <div class="row" v-if="isLoaded">
            <div class="col-12 col-md-6 my-3" v-for="(news, index) in articles['world']" :key="index">
              <a :href="news.url" target="_blank" class="news-box d-flex">
                <div class="thumbnail">
                  <img :src="news.image" alt="thumbnail">
                </div>
                <div class="info">
                  <div class="title">{{ news.title }}</div>
                  <div class="desc">{{ news.description}}</div>
                  <div class="other">
                    <span class="pushdate">{{ news.publishedAt.slice(0, 10) }}</span>
                    <span class="pushTime">{{ news.publishedAt.slice(-9, -1) }}</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="general" role="tabpanel" aria-labelledby="general-tab">
          <div class="row" v-if="isLoaded">
            <div class="col-12 col-md-6 my-3" v-for="(news, index) in articles['general']" :key="index">
              <a :href="news.url" target="_blank" class="news-box d-flex">
                <div class="thumbnail">
                  <img :src="news.image" alt="thumbnail">
                </div>
                <div class="info">
                  <div class="title">{{ news.title }}</div>
                  <div class="desc">{{ news.description}}</div>
                  <div class="other">
                    <span class="pushdate">{{ news.publishedAt.slice(0, 10) }}</span>
                    <span class="pushTime">{{ news.publishedAt.slice(-9, -1) }}</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="health" role="tabpanel" aria-labelledby="health-tab">
          <div class="row" v-if="isLoaded">
            <div class="col-12 col-md-6 my-3" v-for="(news, index) in articles['health']" :key="index">
              <a :href="news.url" target="_blank" class="news-box d-flex">
                <div class="thumbnail">
                  <img :src="news.image" alt="thumbnail">
                </div>
                <div class="info">
                  <div class="title">{{ news.title }}</div>
                  <div class="desc">{{ news.description}}</div>
                  <div class="other">
                    <span class="pushdate">{{ news.publishedAt.slice(0, 10) }}</span>
                    <span class="pushTime">{{ news.publishedAt.slice(-9, -1) }}</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="science" role="tabpanel" aria-labelledby="science-tab">
          <div class="row" v-if="isLoaded">
            <div class="col-12 col-md-6 my-3" v-for="(news, index) in articles['science']" :key="index">
              <a :href="news.url" target="_blank" class="news-box d-flex">
                <div class="thumbnail">
                  <img :src="news.image" alt="thumbnail">
                </div>
                <div class="info">
                  <div class="title">{{ news.title }}</div>
                  <div class="desc">{{ news.description}}</div>
                  <div class="other">
                    <span class="pushdate">{{ news.publishedAt.slice(0, 10) }}</span>
                    <span class="pushTime">{{ news.publishedAt.slice(-9, -1) }}</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="sports" role="tabpanel" aria-labelledby="sports-tab">
          <div class="row" v-if="isLoaded">
            <div class="col-12 col-md-6 my-3" v-for="(news, index) in articles['sports']" :key="index">
              <a :href="news.url" target="_blank" class="news-box d-flex">
                <div class="thumbnail">
                  <img :src="news.image" alt="thumbnail">
                </div>
                <div class="info">
                  <div class="title">{{ news.title }}</div>
                  <div class="desc">{{ news.description}}</div>
                  <div class="other">
                    <span class="pushdate">{{ news.publishedAt.slice(0, 10) }}</span>
                    <span class="pushTime">{{ news.publishedAt.slice(-9, -1) }}</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="technology" role="tabpanel" aria-labelledby="technology-tab">
          <div class="row" v-if="isLoaded">
            <div class="col-12 col-md-6 my-3" v-for="(news, index) in articles['technology']" :key="index">
              <a :href="news.url" target="_blank" class="news-box d-flex">
                <div class="thumbnail">
                  <img :src="news.image" alt="thumbnail">
                </div>
                <div class="info">
                  <div class="title">{{ news.title }}</div>
                  <div class="desc">{{ news.description}}</div>
                  <div class="other">
                    <span class="pushdate">{{ news.publishedAt.slice(0, 10) }}</span>
                    <span class="pushTime">{{ news.publishedAt.slice(-9, -1) }}</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div v-if="isSearched" class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="search" role="tabpanel" aria-labelledby="search-tab">
          <div class="row" v-if="isLoaded">
            <div class="col-12 col-md-6 my-3" v-for="(news, index) in articles['search']" :key="index">
              <a :href="news.url" target="_blank" class="news-box">
                <div class="thumbnail">
                  <img :src="news.image" alt="thumbnail">
                </div>
                <div class="info">
                  <div class="title">{{ news.title }}</div>
                  <div class="desc">{{ news.description}}</div>
                  <div class="other">
                    <span class="pushdate">{{ news.publishedAt.slice(0, 10) }}</span>
                    <span class="pushTime">{{ news.publishedAt.slice(-9, -1) }}</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
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
      isSearched: false,
      searchText: "",
      articles: {
        breaking: {},
        business: {},
        entertainment: {},
        world: {},
        health: {},
        science: {},
        sports: {},
        technology: {},
        search: {}
      },
    };
  },
  methods: {
    getData(e){
      this.isSearched = false;
      let newsType = e.currentTarget.dataset.news;
      let newsUrl = `https://gnews.io/api/v4/top-headlines?topic=${newsType}&country=tw&token=36b01902c1ba6cc0b5d4e4d9c3e8b5ab`;
      // let arr = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
      // let typeStr = arr[arr.indexOf(newsType)];

      // console.log(Object.keys(this.articles[`${newsType}`]).length  == 0);

      if (Object.keys(this.articles[`${newsType}`]).length  == 0) {
        // console.log(this.articles[0]);
        axios.get(newsUrl)
        .then((res) => {
          this.articles[`${newsType}`] = res.data.articles;
          this.isLoaded = true;
          // console.log(res);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
      }

    },
    searchNews(){
      this.isSearched = true;
      let url = `https://gnews.io/api/v4/search?q=${this.searchText}&country=tw&token=36b01902c1ba6cc0b5d4e4d9c3e8b5ab`;
      axios.get(url)
        .then((res) => {
          this.articles['search'] = res.data.articles;
          this.isLoaded = true;
          this.searchText = "";
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
  },
  mounted(){
    let url = `https://gnews.io/api/v4/top-headlines?topic=breaking&country=tw&token=36b01902c1ba6cc0b5d4e4d9c3e8b5ab`;
    axios.get(url)
      .then((res) => {
        this.articles['breaking'] = res.data.articles;
        this.isLoaded = true;
        // console.log(res);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
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

a {
  color: #333;
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

#content {
  position: relative;
  &.loading {
    height: 80vh;
  }
  .loading-icon {
    display: none;
    position: absolute;
    width: 20px;
    height: 20px;
    left: 50%;
    top: 50%;
    z-index: 100;
    transform: translateX(-50%);
    border: 5px solid #000;
    border-radius: 50%;
    &.show {
      display: block;
    }
  }
  .search-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em 0;
    border-bottom: 1px solid #eee;
    input {
      padding: 0 10px;
      margin-right: 5px;
      border: 1px solid #aaa;
      border-radius: 5px;
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 4px 9px;
      border: none;
      border-radius: 5px;
      font-size: 12px;
      background: #00abfa;
      color: #fff;
    }
  }
  .news-items {
    padding: 1rem;
  }
  a.news-box {
    position: relative;
    display: flex;
    height: 120px;
    // overflow: hidden;
    color: #333;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      transform: scaleX(1.05) scaleY(1.2);
      opacity: 0;
    }
    &:hover {
      text-decoration: none;
      &::after {
        opacity: 1;
      }
    }
    .thumbnail {
      margin-right: 10px;
      width: 40%;
      height: 100%;
      overflow: hidden;
      flex-shrink: 0;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .title {
        display: -webkit-box;
        margin-bottom: 5px;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        font-size: 16px;
        font-weight: 700;;
      }
      .desc {
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        color: #888;
        font-size: 12px;
      }
      .other {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .pushdate, .pushTime {
          color: #aaa;
          font-size: 12px;
        }
        .pushdate {
          margin-right: 10px;
        }
      }
    }
  }
}

</style>
