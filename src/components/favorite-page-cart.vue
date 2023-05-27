<template>
  <div class="favorite-page-cart">
    <img class="product-cart__img" :src="(product_data.image)" alt="img">
    <router-link class="links" :to="{ name: 'product', params: { id: product_data.id } }">
      <p class="product-cart__name" v-text="product_data.title"></p>
    </router-link>
    <p class="product-cart__category" v-text="product_data.category"></p>
    <p class="product-cart__price" v-text="product_data.price + ' $'"></p>
    <div class="favorite-page__buttons">
      <button class="product-cart_btn" @click="addToOrders">В корзину</button>
      <button class="favorites_btn" @click="deleteFromFavorite">Убрать из избранного</button>
    </div>
  </div>
</template>

<script lang="ts">
import store from '@/store';
export default {
  name: 'favorite-page-cart',
  props: {
    product_data: {
      required: true,
      type: Object
    }
  },
  methods: {
    addToOrders(){
      store.commit('addToOrders', this.product_data);
    },
    deleteFromFavorite() {
      store.commit('deleteFromFavorite', this.product_data);
    },
  }

}
</script>

<style>
.favorite-page__buttons{
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  min-height: 75px;
}
.favorite-page-cart {
  border-radius: 15px;
  border: 1px solid #000000;
  padding: 16px;
}
</style>
