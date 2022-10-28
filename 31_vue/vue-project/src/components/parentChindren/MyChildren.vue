<template>
  <h2>Children</h2>
  <p>count: {{ props.count }}</p>
</template>

<script setup>
const props = defineProps(["count"]);
console.log("In Children Count: ");
console.log(props.count);
</script>

<style scoped></style>
