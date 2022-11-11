<template>
  <input type="file" @change="onFileChange" />
  <input type="button" value="send" @click="doSendFile" />
  <section>
    <h3>Result</h3>
    <p>{{ fileData }}</p>
    <p>{{ fileDataRef }}</p>
    <img :src="fileBody" />
  </section>
</template>

<script setup>
import { ref } from "vue";

const doSendFile = () => {
  console.log("Start send file");

  const formData = new FormData();
  // formData.append("fileData", fileData); // Если не делали реактивность
  formData.append("fileData", fileDataRef.value); // Классический метод
  // formData.append("fileData", fileBody, "newImage"); // Классический метод

  // formData.append("fileBody", fileBody.value);

  fetch("http://localhost:3333/api/upload_file", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      console.log(response);
    })
    // Я ничего не отвечаю
    // .then((result) => {
    //   console.log(result);
    // })
    .catch((err) => {
      console.log(err);
    });
};

let fileData = null; // Тело файла

let fileDataRef = ref(null); // Тело файла типа ref
let fileBody = ref(null);

const onFileChange = (e) => {
  e.preventDefault(); // Остановим стандартное выполнение
  //Сохраним данные про выбранный файл
  fileData = e.target.files[0]; // Не реактивное сохранение
  fileDataRef.value = e.target.files[0]; // Реактивное

  const fileReader = new FileReader(); // Для чтения файлов
  // Опишем, что должно произойти после чтения файла
  fileReader.addEventListener("load", () => {
    fileBody.value = fileReader.result;
  });
  // Запустим чтение файла по данным формы
  fileReader.readAsDataURL(fileData);
};
</script>

<style scoped></style>
