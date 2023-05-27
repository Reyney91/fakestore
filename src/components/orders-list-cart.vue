<template>
  <div class="orders-list-cart">
    <img class="orders-list-cart__img" :src="(orders_data.image)" alt="">
    <div class="orders-list-cart__info">
      <p v-text="orders_data.name"></p>
      <p v-text="orders_data.price + ' $'"></p>
      <p v v-text="orders_data.category"></p>
    </div>
    <div class="quantity">
      <p>Количество</p>
      <div class="orders-list-cart__quant">
        <button class="quant__btn" @click="decrease">-</button>
        <p v-text="orders_data.quantity"></p>
        <button class="quant__btn" @click="increase">+</button>
      </div>

    </div>
    <button class="delete_btn" @click="deleteFromOrders">Удалить</button>

  </div>
</template>

<script lang="ts">
import store from '@/store';
export default {
  name: 'orders-list-cart',
  props: {
    orders_data: {
      required: true,
      type: Object
    },
  },
  methods: {
    deleteFromOrders() {
      store.commit('deleteFromOrders', this.orders_data);
    },
    decrease(){
      if (this.orders_data.quantity > 1){
        this.orders_data.quantity--;
      }
    },
    increase(){
      this.orders_data.quantity++;
    }
  },
}
</script>

<style>
.orders-list-cart {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #000000;
  border-radius: 15px;
  padding: 16px;
  margin-bottom: 20px;
}

.orders-list-cart__img {
  max-width: 50px;
}

.orders-list-cart__info {
  width: 25%;
}

.delete_btn {
  cursor: pointer;
  background-color: #ff0000;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  padding: 10px 16px;
}
.orders-list-cart__quant{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.quant__btn{
  border: none;
  cursor: pointer;
  /* background:none; */
  height: 20px;
  width: 20px;
}
</style>
