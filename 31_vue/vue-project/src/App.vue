<script setup>
import PostElement from "@/components/slots/post/PostElement.vue";
</script>

<template>
  <main>
    <PostElement>
      <template #header> А это отправь в заголовок </template>
      <template #footer> Это уйдет в подвал </template>
      <div>Это попадает в место - где должен быть просто slot</div>
      <template #body> это в тело </template>
      <div>Это тоже в место - где должен быть просто slot</div>
    </PostElement>
  </main>
</template>

<style scoped>
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
