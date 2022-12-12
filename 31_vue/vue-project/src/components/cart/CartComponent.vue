<template>
  <h1> Страница с корзиной</h1>
  <ul>
    <li
        v-for="(product, index) in cartStore.products"
        :key="index">
      {{ product.body.title }}
      <span> Количество в корзине: {{product.count}}</span>
      <button @click="onAdd(product.body)"> Add++ </button>
      <button @click="onRemove(product.body)"> Remove-- </button>
    </li>
  </ul>
</template>

<script setup>
import {useCartStore} from "@/store/cart/cart";

let cartStore = useCartStore()

const onAdd = (product) => {
  cartStore.put(product)
}

const onRemove = (product) => {
  cartStore.remove(product)
}

</script>

<style scoped>

</style>