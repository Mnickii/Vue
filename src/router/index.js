import Vue from 'vue';
import Router from 'vue-router';
import Headlines from '@/views/HeadlinesView';
import Read from '@/views/ReadView';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Headlines',
      component: Headlines,
    },
    {
      path: '/read',
      name: 'Read',
      component: Read,
    },
  ],
});
