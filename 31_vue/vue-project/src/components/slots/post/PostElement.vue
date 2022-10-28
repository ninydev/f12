<template>
  <h2>Заголовок в обертке (Post)</h2>
  <article style="border: 1px solid gray">
    <header>
      <slot name="header"></slot>
    </header>

    <div>
      <slot name="body"></slot>
      <slot></slot>
    </div>

    <footer>
      <slot name="footer"></slot>
    </footer>
  </article>
</template>

<script setup></script>

<style scoped>
h2 {
  background: green;
}
</style>
