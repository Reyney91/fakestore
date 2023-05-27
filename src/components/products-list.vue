<template>
  <div class="products-list__filters">
    <productSearch v-model:title="searching" placeholder="Поиск" />
    <productSelect :select="selectedSort" :options="options" @select="sortMyProducts" />
  </div>
  <div class="products-list">
    <productListCart v-for="product in sortedAndFilteredProducts" :key="product.id" :product_data='product' />
  </div>
</template>

<script lang="ts">
import store from "@/store"
import productListCart from "./product-list-cart.vue"
import productSearch from "./products-search.vue"
import productSelect from "./products-select.vue"
import { mapActions } from 'vuex'
export default {
  name: 'products-list',
  components: {
    productListCart,
    productSearch,
    productSelect
  },
  data() {
    return {
      searching: '',
      selectedSort: '',
      options: [
        { name: 'All', value: 'All' },
        { name: "men's clothing", value: "men's clothing" },
        { name: "jewelery", value: "jewelery" },
        { name: "electronics", value: "electronics" },
        { name: "women's clothing", value: "women's clothing" }
      ],
      sortedProducts: <any[]>[]
    }
  },
  methods: {
    ...mapActions([
      'get_products',
    ]),
    sortMyProducts(category: string) {
      this.sortedProducts = [];
      this.products.map((item: { category: string; }) => {
        if (item.category === category) {
          return this.sortedProducts.push(item);
        }
      })
    },
  },
  mounted() {
    this.get_products()
  },
  computed: {
    products(): any {
      return store.state.products
    },
    filteredProducts() {
      return this.sortedProducts.length && this.sortedProducts || this.products
    },
    sortedAndFilteredProducts() {
      return this.filteredProducts.filter((posts: { title: string }) => posts.title.toLowerCase().includes(this.searching.trim().toLowerCase()))
    }
  }
}
</script>

<style>
.products-list__filters{
  display: flex;
  justify-content: space-around;
}
.products-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 30px;
}
</style>
