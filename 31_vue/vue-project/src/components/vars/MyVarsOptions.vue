<template>
  <div>
    <h4>Options style</h4>
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
    <button @click="doOnClick">Echo</button>
  </div>
</template>

<script>
export default {
  name: "MyVarsOptions",
  data() {
    return {
      userNoReactive: {
        email: "keeper@ninydev.com",
        name: "Oleksandr Nykytin",
      },
    };
  },
  methods: {
    doOnClick: function () {
      console.log(this.userNoReactive);
    },
  },
  // https://metanit.com/web/vue/1.10.php
  beforeCreate() {
    console.log("beforeCreate()");
  },
  created() {
    console.log("created()");
  },
  beforeMount() {
    console.log("beforeMount()");
  },
  mounted() {
    console.log("mounted()");
  },
  beforeUpdate() {
    console.log("beforeUpdate()");
  },
  updated() {
    console.log("updated()");
  },
  beforeUnmount() {
    console.log("beforeUnmount()");
  },
  unmounted() {
    console.log("unmounted()");
  },
};
</script>

<style scoped></style>
