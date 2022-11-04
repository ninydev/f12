import { defineStore } from "pinia";

export const useNovaPoshtaStore = defineStore("novaPoshta", {
  state: () => ({
    areas: [],
    selectedArea: "none",
  }),
  actions: {
    selectArea(num) {
      this.selectedArea = this.areas[num].Description;
    },
    loadFromServer() {
      fetch("https://api.novaposhta.ua/v2.0/json/", {
        method: "POST",
        body: JSON.stringify({
          modelName: "Address",
          calledMethod: "getAreas",
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((inAreas) => {
          console.log("Получено с сервера:");
          console.log(inAreas.data);
          this.areas = inAreas.data;
          // Сохраним данные в локальном хранилище
          localStorage.setItem("npAreas", JSON.stringify(inAreas.data));
        })
        .catch((err) => {
          console.log("err");
          console.log(err);
        });
    },
  },
});
