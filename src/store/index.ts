import { createStore } from 'vuex'
import { Item } from '../interfaces/posts'
import axios from 'axios'

export default createStore({
  state: {
    products: <Item[]>[],
    cart: <Item[]>[],
    favorites: <Item[]>[],
  },
  getters: {
  },
  mutations: {
    set_products: (state, products) => {
      state.products = products;
    },
    addToOrders: (state, product) => {
      if (state.cart.length) {
        let productExist = false;
        state.cart.find((item) => {
          if (item.id === product.id) {
            productExist = true;
            item.quantity++;
          }
        })
        if (!productExist) {
          state.cart.push({ ...product, quantity: 1 })
        }
      } else {
        state.cart.push({ ...product, quantity: 1 })
      }
    },
    deleteFromOrders: (state, item) => {
      let index = state.cart.indexOf(item);
      state.cart.splice(index, 1);
    },
    addToFavorite: (state, product) => {
      let productExist = false;
      state.favorites.map((item) => {
        if (item.id == product.id) productExist=true
      })
      if (!productExist) state.favorites.push(product);
    },
    deleteFromFavorite: (state, item) => {
      let index = state.favorites.indexOf(item);
      state.favorites.splice(index, 1);
    },
  },
  actions: {
    get_products({ commit }) {
      return axios('https://fakestoreapi.com/products', {
        method: 'GET'
      })
        .then((products) => {
          commit('set_products', products.data);
          return products;
        })
    },

  },
  modules: {
  }
})
