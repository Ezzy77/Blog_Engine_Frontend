import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/pages/Home.vue";
import Login from "../views/pages/Login.vue";
import Register from "../views/pages/Register.vue";
import Articles from "../views/pages/Articles.vue";
import Article from "../views/pages/Article.vue";
import CreateArticle from "../views/pages/CreateArticle.vue";
import EditArticle from "../views/pages/EditArticle.vue";
// import Profile from "../views/pages/Profile.vue";
import Dashboard from "../views/pages/Dashboard.vue";

const ifAuthenticated = (to, from, next) => {
  const loggedIn = localStorage.getItem("session_token");
  if (loggedIn) {
    next();
    return;
  }
  next("/login");
};

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/articles", component: Articles },
  { path: "/articles/:article_id", component: Article },
  {
    path: "/create-article",
    component: CreateArticle,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/edit-article/:article_id",
    name: "EditArticle",
    component: EditArticle,
    beforeEnter: ifAuthenticated,
  },
  { path: "/dashboard", component: Dashboard, beforeEnter: ifAuthenticated },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
