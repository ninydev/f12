<template>
  <div style="border: 1px solid red">
    <h1>Parent</h1>
    <MyChildren :count="count"></MyChildren>
    <hr />

    <slot></slot>
    <div>
      <button @click="doMinus">-</button>
      {{ count }}
      <button @click="doPlus">+</button>
    </div>
  </div>
</template>

<script setup>
import MyChildren from "@/components/parentChindren/MyChildren.vue";
import { ref } from "vue";

let count = ref(0);

const doPlus = () => {
  count.value++;
};
const doMinus = () => {
  count.value--;
};

const props = defineProps(["propsName", "varName"]);
console.log("Props:");
console.log(props);
console.log(props.propsName);
console.log(props.varName);
</script>

<style scoped></style>
