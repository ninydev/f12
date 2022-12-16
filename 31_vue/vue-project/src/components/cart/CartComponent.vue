<template>
  <h1> Страница с корзиной</h1>
  <ul>
    <li
        v-for="(product, index) in cartStore.products"
        :key="index">
      {{ product.body.title }}
      <span> Количество в корзине: {{product.count}}</span>
      <button @click="cartStore.put(product.body)"> Add++ </button>
      <button @click="cartStore.remove(product.body)"> Remove-- </button>
    </li>
  </ul>
</template>

<script setup>
import {useCartStore} from "@/store/cart/cart";

let cartStore = useCartStore()

</script>

<style scoped>

</style>