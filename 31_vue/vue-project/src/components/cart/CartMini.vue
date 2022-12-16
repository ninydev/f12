<template>
  <div>
    <h3> Маленькая корзина </h3>
    <ul>
      <li><span> Сумма: </span> {{ cartStore.getSum}}</li>
      <li><span> Количество уникальных : </span> {{ cartStore.getCount}}</li>
      <li><span> Количество всего : </span> {{ cartStore.getTotalCount}}</li>
    </ul>
  </div>
</template>

<script setup>
import {useCartStore} from "@/store/cart/cart";

let cartStore = useCartStore()

</script>

<style scoped>

</style>