<template>
  <h1>Peoples</h1>
  <ul v-if="peoples.length > 0">
    <li v-for="(people, index) in peoples" :key="index">{{ people }}</li>
  </ul>
  <div v-else>У вас нет людей в списке</div>
  <input id="newName" /><button @click="addPeople">+</button>
  <hr />
  <div>Ref: {{ countRef }} | NoRef: {{ countNoRef }}</div>
  <div>
    <button @click="doPlus">+</button> <button @click="doMinus">-</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const peoples = ref([]);
const addPeople = function () {
  peoples.value.push(document.getElementById("newName").value);
  console.log(peoples);
};

// Объявление переменных для хранения
let countNoRef = 0; // В одну сторону
const countRef = ref(0); // В две стороны

// Метод добавления (реакции на кнопку)
const doPlus = () => {
  countNoRef++;
  countRef.value++;
};

const doMinus = () => {
  countNoRef--;
  countRef.value--;
};
</script>

<style scoped></style>
