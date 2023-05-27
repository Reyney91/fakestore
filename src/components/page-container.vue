<template>
  <div class="page-container">
    <div class="pages-nav">
      <router-link :to="'/'">
        <img class="main-page-img" src="../assets/logo.png" alt="mainpage-logo">
      </router-link>
      <router-link class="links" :to="'/catalog'">
        <div class="catalog-link" v-text="'Каталог'"></div>
      </router-link>
      <router-link class="links" :to="'/favorites'">
        <div class="catalog-link" v-text="'Избранное'"></div>
      </router-link>
      <router-link class="links" :to="'/orders'">
        <div class="orders-link" v-text="'Корзина: ' + this.$store.state.cart.length"></div>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import store from '@/store';
export default {
  name: 'page-container',
}
</script>
<style>
.page-container {
  max-width: 70%;
  margin: 0 auto;
}

.pages-nav {
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #00ff95;
}

.links {
  color: #000000;
  text-decoration: none;
}

.links:hover {
  color: #ff0000;
}

.main-page-img {
  width: 80px;
}
</style>
