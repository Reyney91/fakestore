<template>
  <div v-if="cart.length">
    <h1 class="orders-list__total" v-text="'Total: ' + cartTotalCost + ' $'"></h1>
    <div class="orders-list">
      <ordersListCart v-for="(item, index) in cart" :key="item.id" :orders_data="item" />
    </div>
  </div>
  <h2 v-else>Корзина пуста</h2>
</template>

<script lang="ts">
import store from "@/store";
import ordersListCart from './orders-list-cart.vue'
export default {
  name: 'orders-list',
  components: {
    ordersListCart
  },

  computed: {
    cart(): any {
      return store.state.cart
    },
    cartTotalCost(): number {
      return this.cart.map((el: { price: any; quantity: number; }) => (el.price) * el.quantity).reduce((acc: any, el: any) => acc + el, 0).toFixed(2);
    },
  }
}
</script>
<style>
.orders-list__total {

  margin-bottom: 10px;
}
</style>
