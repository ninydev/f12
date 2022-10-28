<script setup>
import MyParent from "@/components/parentChindren/MyParent.vue";
</script>

<template>
  <main>
    <h2>Заголовок в обертке (Main)</h2>
    <MyParent propsName="propsValue" varName="5"></MyParent>
  </main>
</template>

<style scoped>
h2 {
  background: red;
}
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
