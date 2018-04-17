<template>
<div>
  <search/>
  <div v-if="newsItems.length > 0">
    <div class="headlines">
      <news-item v-for="(newsitem, index) in newsItems" :news-data="newsitem" :key="index"/>
    </div>
    <button
      @click.prevent="loadMore">
      Load More
    </button>
  </div>
  <div v-else>Sorry, Nothing else here! :)</div>
</div>
</template>

<script>
import { mapState } from 'vuex';
import NewsItem from '@/components/NewsItem';
import Search from '@/components/Search';

export default {
  name: 'Headlines',
  components: {
    Search,
    NewsItem,
  },
  computed: {
    ...mapState('news', ['newsItems']),
  },
  created() {
    this.$store.dispatch('news/loadNewsItems');
  },
  methods: {
    loadMore() {
      this.$store.dispatch('news/loadMoreNewsItems');
    },
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
