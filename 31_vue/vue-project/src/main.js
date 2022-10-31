// Импортируем минимальный набор необходимый для работы с маршрутами
import { createRouter, createWebHistory } from "vue-router";

// Импортируем метод создания приложения
import { createApp } from "vue";

// Импортируем главный компонент
import App from "@/App.vue";
import "./assets/main.css";

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

// Создать приложение vue, с главным компонентом App
const app = createApp(App);

// Задействовать ротуер для приложения
app.use(router);

// Разместить приложение на указанный div
app.mount("#app");
