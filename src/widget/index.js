import ordertwo from './ordertwo'
import wholePage from './wholePage'
import paymentPage from './paymentPage'
import cancelPage from './cancelPage'
import Router from "vue-router/types/index";


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