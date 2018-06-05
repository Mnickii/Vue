<template>
  <div class="news-item">
    <h2><a :href="newsData.url">{{ newsData.title }}</a></h2>
    <img :src="newsData.urlToImage" class="news-image"/>
    <h4>{{ newsData.description }}</h4>
    <h4><a :href="newsData.url"> Show more</a></h4>
    <button v-if="showMarkAsRead"
      @click.prevent="markRead">
      Mark as read
    </button>
    <button v-if="showMarkAsUnread"
      @click.prevent="markUnread">
      Mark as unread
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
    showMarkAsRead: {
      type: Boolean,
      required: true,
    },
    showMarkAsUnread: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
    };
  },
  methods: {
    markRead() {
      this.$store.commit('news/readNewsItem', this.newsData);
    },
    markUnread() {
      this.$store.commit('news/unreadNewsItem', this.newsData);
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
