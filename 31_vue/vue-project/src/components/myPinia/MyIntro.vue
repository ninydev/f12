<template>
  <h1>Pinia 1</h1>
  <div>Counter = {{ counter.count }}</div>
  <button @click="minus">-</button>
  <button @click="plus">+</button>
</template>

<script setup>
import { useCounterStore } from "@/store/counter";

const counter = useCounterStore();

const plus = () => {
  // counter.count++; // Нехорошо !!!!
  counter.plus();
};

const minus = () => {
  counter.minus();
};
</script>

<style scoped></style>
