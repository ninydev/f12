<template>
  <input type="text" v-model="password" />
  <input type="text" v-model="confirmPassword" />
  <input type="button" :disabled="validate.btnSubmit" />
  <ValidateDisplay :validate="validate"></ValidateDisplay>
</template>

<script setup>
import { computed, ref } from "vue";
import ValidateDisplay from "@/components/auth/Password/ChangePassword/ValidateDisplay.vue";

// Поля для ввода
let password = ref(""); // Сам пароль
let confirmPassword = ref(""); // Его подтверждение

let validate = computed(() => {
  // Результат проверки - можно нельзя
  let res = {
    len: true, // по умолчанию длина пароля правильная
    confirm: false, // по умолчанию - пароли не совпадают
    btnSubmit: true,
  };
  if (password.value.length < 3) {
    res["len"] = false; // а вот если короче - то не правильное
  }
  if (password.value === confirmPassword.value) {
    res["confirm"] = true; // а вот если совпадают - то тогда все хорошо
  }

  // ....
  res["btnSubmit"] = !(res["len"] && res["confirm"]);

  console.log(res);
  return res;
});
</script>

<style scoped></style>
