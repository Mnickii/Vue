<template>
  <div class="search">
    <sui-input icon="search" placeholder="Search..." @keyup.enter="search" v-model="searchTerm"/>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      searchTerm: '',
    };
  },
  methods: {
    search() {
      this.$store.dispatch('news/searchNewsItems', this.searchTerm);
    },
  },
};
</script>
