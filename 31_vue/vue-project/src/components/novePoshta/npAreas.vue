<template>
  <h2>Регионы</h2>
  <button @click="loadAreas">Reload Areas</button>
  <select>
    <option v-for="(area, index) in areas" :key="index" :v-model="area.Ref">
      {{ area.Description }}
    </option>
  </select>

  <ul>
    <li v-for="(area, index) in areas" :key="index">
      {{ area.DescriptionRu }}
    </li>
  </ul>
</template>

<script setup>
import { onMounted, ref } from "vue";

// let areas = reactive([]);
let areas = ref([]);

const loadAreas = () => {
  let data = {
    modelName: "Address",
    calledMethod: "getAreas",
  };

  fetch("https://api.novaposhta.ua/v2.0/json/", {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .then((inAreas) => {
      console.log(inAreas.data);
      areas.value = inAreas.data;
    })
    .catch((err) => {
      console.log("err");
      console.log(err);
    });
};

onMounted(() => loadAreas());
</script>

<style scoped>
h2 {
  background: aqua;
}
</style>
