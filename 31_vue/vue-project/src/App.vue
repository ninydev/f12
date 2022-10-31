<template>
  <main>
    <nav>
      <ul>
        <!-- Для формирования ссылки -->
        <li><router-link to="/">Go to Home</router-link></li>
        <li><router-link to="/about">Go to About</router-link></li>
      </ul>
    </nav>
    <h2>Заголовок в обертке (Main)</h2>
    <!-- место вывода компонента по этой ссылке -->
    <router-view></router-view>
  </main>
</template>

<script setup></script>

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
