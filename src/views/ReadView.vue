<template>
<div>
  <button class="button" @click="goHome">Home</button>
  <div v-if="readItems.length > 0">
    <div class="read">
      <news-item v-for="(newsitem, index) in readItems"
      :news-data="newsitem"
      :key="index"
      :show-mark-as-read="false"
      :show-mark-as-unread="true"
      />

    </div>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex';
import NewsItem from '@/components/NewsItem';

export default {
  name: 'Read',
  components: {
    NewsItem,
  },
  computed: {
    ...mapState('news', ['readItems']),
  },
  methods: {
    goHome() {
      this.$router.push({ name: 'Headlines' });
    },
  },
};
</script>
 <style>
.read {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.6rem;
  background: #fafafa;
}
 </style>
