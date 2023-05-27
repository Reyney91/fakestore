<template>
  <input class="products-search" type="text" :value="title" @input="$emit('update:title', ($event.target as HTMLInputElement).value)">
</template>
<script lang="ts">
export default {
  name: 'products-search',
  props: {
    title: String
  }
}
</script>
<style>
  .products-search{
    display: flex;
    align-items: flex-start;
    padding: 10px 15px;
    font-size: 15px;
    margin-bottom: 24px;
    border-radius: 10px;
  }
</style>
