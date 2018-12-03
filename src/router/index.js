import Vue from 'vue'
import Router from 'vue-router'
import homePage from '../components/homePage'
import myOrder from '../components/myOrder'
import my from '../components/my'
import order from '../components/order'
import ordertwo from '../widget/ordertwo'
Vue.use(Router)

export default new Router({
  routes: [
      {path: '/', component: homePage},
      {path: '/order', component: myOrder},
      {path: '/my', component: my},
      {path: '/ord', component: order},
      {path: '/ordt', component: ordertwo}

   ],
    linkActiveClass: 'active'
})
