<template>
  <div class="favorite-page">
    <favoritePageCart v-if="favorites.length" v-for="product in favorites" :key="product.id" :product_data='product' />
    <h2 v-else>Вы еще не добавили товар в избранное</h2>
  </div>
</template>
<script lang="ts">
import store from '@/store';
import favoritePageCart from './favorite-page-cart.vue'
export default {
  name: 'favorite-page',
  components: {
    favoritePageCart
  },
  computed: {
    favorites(): any {
      return store.state.favorites
    },
  }
}
</script>
<style>
.favorite-page {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 30px;
}
</style>
