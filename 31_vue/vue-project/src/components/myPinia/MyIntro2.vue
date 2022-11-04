<template>
  <h1>Pinia 2</h1>
  <div>Counter = {{ counter.$state }}</div>
  <button @click="rand">rand</button>
</template>

<script setup>
import { useCounterStore } from "@/store/counter";

const counter = useCounterStore();

const rand = () => {
  counter.randomizeCounter();
};
</script>

<style scoped></style>
