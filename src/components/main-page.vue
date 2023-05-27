<template>
  <div class="main-page">
    <h1 class="main-page__greetings" v-text="'Здравствуйте, добро пожаловать в fakestore'"></h1>
    <div class="main-page__about">
      <p v-text="'Проект Неустроева Андрея'"></p>
    </div>
  </div>
</template>
<script lang="ts">
export default{
  name: 'main-page',
}
</script>
<style>
  .main-page__about{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 20px;
  }
</style>
