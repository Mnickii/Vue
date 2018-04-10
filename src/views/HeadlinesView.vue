<template>
  <div class="headlines">
      <news-item v-for="(newsitem, index) in newsitems" :news-data="newsitem" :key="index"/>
  </div>
</template>

<script>
import NewsItem from '@/components/NewsItem';

export default {
  name: 'Headlines',
  components: {
    NewsItem,
  },
  computed: {
    newsitems() {
      return this.$store.state.news.newsItems;
    },
  },
  created() {
    this.$store.dispatch('news/loadNewsItems');
  },
};
</script>
 <style>
.headlines {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.6rem;
  background: #fafafa;
}
 </style>
