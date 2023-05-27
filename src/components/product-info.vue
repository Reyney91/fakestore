<template>
  <div class="product-info">
    <div class="product-wrapper">
      <img class="product__image" :src="(product.image)" alt="img">
      <div class="product__description">
        <h3 v-text="product.title"></h3>
        <p v-text="'Price: '+ product.price+' $'"></p>
        <p v-text="'Category: '+  product.category "></p>
        <p v-text="'Description: '+product.description"></p>
        <button class="favorites_btn" @click="addToFavorite">В избранное</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { mapActions } from 'vuex';
import { defineComponent } from 'vue'
import store from '@/store';
export default defineComponent({
  name: "product-info",
  computed: {
    product():any {
      return store.state.products.find(el =>el.id==this.$route.params.id)
    }
  },
  methods: {
    ...mapActions([
      'get_products'
    ]),
    addToFavorite(){
      store.commit('addToFavorite', this.product);
    }
  },
  mounted() {
    this.get_products()
  }
})
</script>
<style>

.product-wrapper{
  align-items: center;
  display: flex;
  justify-content: space-around;
}
.product__image{
  max-width: 40%;
}
.product__description{
  max-width: 50%;
  text-align: left;
}
.favorites_btn{
  cursor: pointer;
  padding: 10px 16px;
  border-radius: 10px;
  border: none;
  background-color: #ff9900;
  color: #ffffff;
}
</style>
