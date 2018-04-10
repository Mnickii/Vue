import axios from 'axios';

export default {
  namespaced: true,
  state: {
    newsItems: [],
  },
  actions: {
    async loadNewsItems({ commit }) {
      const news = (await axios.get('http://newsapi.org/v2/top-headlines', {
        params: {
          country: 'us',
          apiKey: process.env.API_KEY,
        },
      })).data.articles;
      commit('setNews', news);
    },
  },
  mutations: {
    setNews(state, data) {
      state.newsItems = data;
    },
  },
};
