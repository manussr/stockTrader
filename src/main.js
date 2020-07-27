import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import {routes} from "./routes"
import store from "./store/store"
import VueResource from "vue-resource"

Vue.use(VueRouter);
Vue.use(VueResource);
const your_firebase_url="";
Vue.http.options.root=your_firebase_url;


Vue.filter('currency',(value)=>{
  return '$'+value.toLocaleString();
});

const router=new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router:router,
  store,
  render: h => h(App)
})
