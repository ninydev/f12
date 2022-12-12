<template>
  <GrayHeader></GrayHeader>
  <hr>
  <ProductCard></ProductCard>
  <CartMini></CartMini>
  <CartComponent></CartComponent>
  <GrayFooter></GrayFooter>
</template>

<script setup>
import GrayHeader from "@/components/layouts/GrayHeader.vue";
import GrayFooter from "@/components/layouts/GrayFooter.vue";
import GrayNavigator from "@/components/layouts/GrayNavigator.vue";
import MyFileForm from "@/components/forms/files/MyFileForm.vue";
import CartMini from "@/components/cart/CartMini.vue";
import CartComponent from "@/components/cart/CartComponent.vue";
import ProductCard from "@/components/products/ProductCard.vue";
</script>

<style scoped></style>
