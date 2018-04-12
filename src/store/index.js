import Vue from 'vue';
import Vuex from 'vuex';
import SuiVue from 'semantic-ui-vue';

import news from './news';

Vue.use(Vuex);
Vue.use(SuiVue);

export default new Vuex.Store({
  modules: {
    news,
  },
});
