<template>
<h2> Какой то продукт: {{product.title}} </h2>
<button @click="onAdd"> Add++ </button>
<button @click="onRemove"> Remove-- </button>
</template>

<script setup>
import {useCartStore} from "@/store/cart/cart";

let cartStore = useCartStore()

let product = {
  _id: 1,
  title: " Временный продукт",
  price: 100
}

const onAdd = () => {
  cartStore.put(product)
}

const onRemove = () => {
  cartStore.remove(product)
}



</script>

<style scoped>

</style>