<template>
  <div class="news-item">
    <h2><a :href="newsData.url">{{ newsData.title }}</a></h2>
    <img :src="newsData.urlToImage" class="news-image"/>
    <h4>{{ newsData.description }}</h4>
    <h4><a :href="newsData.url"> Show more</a></h4>
    <button
      @click.prevent="markRead">
      Mark as read
    </button>
  </div>
</template>

<script>
export default {
  name: 'NewsItem',
  props: {
    newsData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
    };
  },
  methods: {
    markRead() {
      this.$store.commit('news/deleteNewsItem', this.newsData);
    },
  },
};
</script>

<style>
.news-image {
  width: 80%
}
.news-item {
   width: 50vw;
   box-sizing: border-box;
   padding: 0.2rem;
   background: #fafafa;
}
.news-item a{
  color: black;
}
</style>
