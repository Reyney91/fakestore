<template>
  <select class="products-select" :value="optionsValue" @change="changeOption">
    <option disabled value="">Категория</option>
    <option v-for="option in options" :key="option.value" :value="option.value" v-text="option.name"></option>
  </select>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    props: {
      optionsValue: String,
      options:<any>[]
    },
    methods: {
      changeOption(e:any){
        this.$emit('select', e.target.value);
      }
    }
  })
</script>

<style>
  .products-select{
    display: flex;
    align-items: flex-start;
    padding: 10px 15px;
    font-size: 15px;
    margin-bottom: 24px;
    border-radius: 10px;

  }
</style>
