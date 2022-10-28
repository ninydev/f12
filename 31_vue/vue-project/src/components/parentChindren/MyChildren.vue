<template>
  <h2>Children</h2>
  <p>count: {{ props.count }}</p>
</template>

<script setup>
const props = defineProps(["count"]);
console.log("In Children Count: ");
console.log(props.count);

// const doPlus = () => {
//   props.count.value++;
// };
// const doMinus = () => {
//   props/count.value--;
// };
</script>

<style scoped></style>
