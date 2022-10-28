<template>
  <div style="border: 1px solid red">
    <h1>Parent</h1>
    <MyChildren></MyChildren>
    <hr />
    <slot></slot>
  </div>
</template>

<script setup>
import MyChildren from "@/components/parentChindren/MyChildren.vue";
</script>

<style scoped></style>
