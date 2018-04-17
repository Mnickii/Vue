import axios from 'axios';

export default {
  namespaced: true,
  state: {
    newsItems: [],
    page: 1,
  },
  actions: {
    async loadNewsItems({ state, commit }) {
      const news = (await axios.get('http://newsapi.org/v2/top-headlines', {
        params: {
          page: state.page,
          country: 'gb',
          apiKey: process.env.API_KEY,
        },
      })).data.articles;
      commit('setNews', news);
    },
    async searchNewsItems({ commit }, searchTerm) {
      const news = (await axios.get('http://newsapi.org/v2/everything', {
        params: {
          q: searchTerm,
          sortBy: 'popularity',
          apiKey: process.env.API_KEY,
        },
      })).data.articles;
      commit('setNews', news);
    },
    async loadMoreNewsItems({ commit, dispatch }) {
      commit('newPage');
      dispatch('loadNewsItems');
    },
  },
  mutations: {
    setNews(state, data) {
      state.newsItems = data;
    },
    deleteNewsItem(state, data) {
      const dataIndex = state.newsItems.indexOf(data);
      state.newsItems.splice(dataIndex, 1);
    },
    newPage(state) {
      state.page += 1;
    },
  },
};
