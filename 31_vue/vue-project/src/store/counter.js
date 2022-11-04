import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  // Изначальное состояние
  state: () => ({
    count: 0,
  }),
  // Операции с данными - которые я могу выполнять
  actions: {
    plus() {
      this.count++;
    },
    minus() {
      this.count--;
    },
    randomizeCounter() {
      this.count = Math.round(100 * Math.random());
    },
  },
});
