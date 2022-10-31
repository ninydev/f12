<template>
  <h3>Проверка пароля</h3>
  <p>{{ props.validate.len }} {{ validateMessage.len }}</p>
  <p>{{ props.validate.confirm }} {{ validateMessage.confirm }}</p>
  <p>{{ props.validate.btnSubmit }}</p>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["validate"]);
console.log("props");
console.log(props.validate);

let validateMessage = computed(() => {
  let res = {
    len: "Длина не подходит",
    confirm: "Пароли не совпадают",
  };
  if (props.validate.len) {
    res.len = "Длина подходит";
  } else {
    res.len = "Длина не подходит";
  }
  if (props.validate.confirm) {
    res.confirm = "Пароли совпадают";
  }
  return res;
});
</script>

<style scoped></style>
