<template>
  <div class="product-list-cart">
    <img class="product-cart__img" :src="(product_data.image)" alt="img">
    <router-link class="links" :to="{ name: 'product', params: { id: product_data.id }}">
      <p class="product-cart__name" v-text="product_data.title"></p>
    </router-link>
    <p class="product-cart__price" v-text="product_data.price + ' $'"></p>
    <div class="product-cart-buttons">
      <button class="product-cart_btn" @click="addToOrders">В корзину</button>
      <button class="favorites_btn" @click="addToFavorite">В избранное</button>
    </div>
  </div>
</template>

<script lang="ts">
import store from '@/store';
export default {
  name: 'product-list-cart',
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
    addToFavorite(){
      store.commit('addToFavorite', this.product_data);
    }
  }

}
</script>

<style>
.product-list-cart {
  border-radius: 15px;
  border: 1px solid #000000;
  padding: 16px;
}

.product-cart__name {
  cursor: pointer;
  height: 70px;
  align-self: center;
  color: #0000ff;
}

.product-cart__name:hover {
  color: #ff0000;
}

.product-cart__img {
  height: 100px;
  max-width: 150px;
}

.product-cart_btn {
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 10px;
  border: none;
  background-color: #009c00;
  color: #ffffff;

}
.product-cart-buttons{
  display: flex;
  justify-content: space-around;
}
</style>
