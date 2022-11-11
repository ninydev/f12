// Импортируем метод создания приложения
import { createApp } from "vue";
// Создать приложение vue, с главным компонентом App
const app = createApp(App);

// Импортируем главный компонент
import App from "@/App.vue";
import "./assets/styles.css"; // Импортирую дизайн в приложение
import "./assets/main.css";

// Импортируем минимальный набор необходимый для работы с маршрутами
import { createRouter, createWebHistory } from "vue-router";

// Расписываем, какой компонент будет отображаться по маршруту
const routes = [
  // Маршрут, компонент. В данном случае - компонент будет подгружаться с сервера
  { path: "/", component: () => import("./pages/MainPage.vue") },
  { path: "/about", component: () => import("./pages/AboutPage.vue") },
  {
    // Описание не существующего маршрута - для вывода ошибки 404
    path: "/:pathMatch(.*)*",
    component: () => import("./pages/ErrorPage.vue"),
  },
];

// Создать маршрутизатор на основе описанных маршрутов
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Задействовать ротуер для приложения
app.use(router);

// Создать хранилище (store)
import { createPinia } from "pinia";
const pinia = createPinia();
app.use(pinia);

// Разместить приложение на указанный div
app.mount("#app");
