<script setup>
import { ref } from "vue";

// Массив объектов
const items = ref([{ message: "Foo" }, { message: "Bar" }]);

// Массив строк
const peoples = ["Sasha", "Ann", "Elena", "Dmitro", "Andrey", "Masha"];
</script>

<template>
  <h1>My First</h1>
  <ul>
    <li v-for="(people, index) in peoples" :key="index">{{ people }}</li>
  </ul>
  <hr />
  <ul>
    <li v-for="(item, index) in items" :key="index">{{ item.message }}</li>
  </ul>
</template>

<style scoped>
h1 {
  background: red;
}
</style>
