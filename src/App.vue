<template>
  <div id="app">
    <h1>Infomd</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$store.dispatch('news/loadNewsItems');
  },
};
</script>

<style>
#app {
  text-align: center;
  background: #fafafa;
  margin-top: 20px;
}
</style>
