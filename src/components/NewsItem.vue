<template>
  <div class="news-item">
    <h1><a :href="newsData.url">{{ newsData.title }}</a></h1>
    <img :src="newsData.urlToImage"/>
    <h4>{{ newsData.description }}</h4>
    <a :href="newsData.url"> Show more </a>
  </div>
</template>

<script>
export default {
  name: 'NewsItem',
  props: {
    newsData: {
      type: Object,
      required: true,
      validator(newsData) {
        return newsData.title && newsData.description && newsData.urlToImage && newsData.url;
      },
    },
  },
  data() {
    return {
    };
  },
};
</script>
