import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes';
import { store } from './store';

Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: 'history',
  routes: routes
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
