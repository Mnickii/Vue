import Vue from 'vue';
import Router from 'vue-router';
import Headlines from '@/views/HeadlinesView';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Headlines',
      component: Headlines,
    },
  ],
});
