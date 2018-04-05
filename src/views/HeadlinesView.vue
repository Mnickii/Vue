<template>
  <div class="hello">
      <news-item v-for="(newsitem, index) in newsitems" :news-data="newsitem" :key="index"/>
  </div>
</template>

<script>
import axios from 'axios';
import NewsItem from '@/components/NewsItem';

export default {
  name: 'Headlines',
  components: {
    NewsItem,
  },
  data() {
    return {
      newsitems: [],
    };
  },
  created() {
    axios.get('http://newsapi.org/v2/top-headlines', {
      params: {
        country: 'us',
        apiKey: process.env.API_KEY,
      },
    })
      .then((response) => {
        this.newsitems = response.data.articles;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
