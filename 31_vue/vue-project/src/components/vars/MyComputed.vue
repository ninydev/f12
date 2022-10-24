<template>
  <h3>Computed</h3>
  <input v-model="user.name" v-bind:class="nameValid" />
  <input v-model="user.age" type="number" />
  <hr />
  <div v-if="user.age < 18">Доступ запрещен</div>
  <div v-else>Добро пожаловать</div>
  <hr />
  <div>{{ funByAge() }}</div>
  <!-- Я не везде могу использовать вывод результата функции -->
  <!--  <input v-model="funByAge()" />-->
  <hr />
  <div>{{ computedByAge }}</div>
  <input v-model="computedByAge" />
</template>

<script setup>
import { computed, reactive } from "vue";

let user = reactive({ name: "Tom", age: 19 });

const funByAge = () => {
  return user.age > 17 ? "Добро пожаловать" : "Доступ запрещен";
};

const computedByAge = computed(() => {
  return user.age > 17 ? "Добро пожаловать" : "Доступ запрещен";
});

const nameValid = computed(() => {
  return user.name.length > 3 ? "valid" : "invalid";
});
</script>

<style scoped>
.valid {
  border: 1px solid green;
}
.invalid {
  border: 1px solid red;
}
</style>
