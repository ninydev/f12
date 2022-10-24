<template>
  <h3>My Vars</h3>
  <p>someVars = {{ someVars }}</p>
  <p>someVars Text = <span v-text="someVars"></span></p>
  <p>someVars Html = <span v-html="someVars"></span></p>
  <p>
    <label>
      someInputVars
      <input v-model="someInputVars" />
      <span v-text="someInputVars"></span>
    </label>
  </p>
  <div>
    <h4>No Reactive</h4>
    <label>
      Email
      <input v-model="userNoReactive.email" />
      <span v-text="userNoReactive.email"></span>
    </label>
    <br />
    <label>
      Name
      <input v-model="userNoReactive.name" />
      <span v-text="userNoReactive.name"></span>
    </label>
  </div>

  <div>
    <h4>Reactive</h4>
    <label>
      Email
      <input v-model="userReactive.email" />
      <span v-text="userReactive.email"></span> |
      <span>{{ userReactive.email }}</span>
    </label>
    <br />
    <label>
      Name
      <input v-model="userReactive.name" />
      <span v-text="userReactive.name"></span>
    </label>
  </div>

  <div>
    <h4>Ref</h4>
    <label>
      Email
      <input v-model="userRef.email" />
      <span v-text="userRef.email"></span> |
      <span>{{ userRef.email }}</span>
    </label>
    <br />
    <label>
      Name
      <input v-model="userRef.name" />
      <span v-text="userRef.name"></span>
    </label>
  </div>

  <button @click="doOnClick">Echo</button>
</template>

<script setup>
import { onMounted, onUnmounted, onUpdated, reactive, ref } from "vue";

// https://ua.vuejs.org/guide/essentials/lifecycle.html
onMounted(() => {
  console.log("mounted()");
});

onUpdated(() => {
  console.log("updated()");
});

onUnmounted(() => {
  console.log("unmounted()");
});

const doOnClick = () => {
  console.log(userNoReactive);
};

let someVars = "Hello <strong> World </strong>";
let someInputVars = "User Name";

// https://ua.vuejs.org/guide/essentials/template-syntax.html
let userNoReactive = {
  email: "keeper@ninydev.com",
  name: "Oleksandr Nykytin",
};

// https://ua.vuejs.org/guide/essentials/reactivity-fundamentals.html
let userReactive = reactive({
  email: "keeper@ninydev.com",
  name: "Oleksandr Nykytin",
});

// https://ua.vuejs.org/guide/essentials/reactivity-fundamentals.html
let userRef = ref({
  email: "keeper@ninydev.com",
  name: "Oleksandr Nykytin",
});
</script>

<style scoped></style>
