import { createRouter, createWebHashHistory } from 'vue-router'
import mainPage from '../components/main-page.vue'
import productsList from '../components/products-list.vue'
import productInfo from '../components/product-info.vue'
import ordersList from '../components/orders-list.vue'
import favoritePage from '../components/favorite-page.vue'
const routes = [
  {
    path: '/',
    name: 'main',
    component: mainPage
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: productsList
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: favoritePage
  },
  {
    path:'/product/:id',
    name:'product',
    component:productInfo,
    props: true
  },
  {
    path:'/orders',
    name:'orders',
    component:ordersList,
    props: true
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
