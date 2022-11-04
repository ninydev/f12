<template>
  <h2>Регионы</h2>
  <button @click="loadAreas">Reload Areas</button>
  <select @change="onAreasChangeEvent">
    <option
      v-for="(area, index) in novaPoshta.areas"
      :key="index"
      :value="index"
    >
      {{ area.Description }}
    </option>
  </select>
  <div>Selected: {{ selectedArea }}</div>
  <div>Selected: {{ novaPoshta.selectedArea }}</div>
</template>

<script setup>
import { useNovaPoshtaStore } from "@/store/novaPoshta/novaPoshta";
import { onMounted, ref } from "vue";

let novaPoshta = useNovaPoshtaStore();

let selectedArea = ref("");
const onAreasChangeEvent = (ev) => {
  console.log(ev.target.value);
  selectedArea.value = novaPoshta.areas[ev.target.value].Description;
  novaPoshta.selectArea(ev.target.value);
};

const loadAreas = () => {
  novaPoshta.loadFromServer();
};

onMounted(() => loadAreas());
</script>

<style scoped>
h2 {
  background: aqua;
}
</style>
