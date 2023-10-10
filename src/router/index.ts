import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "@/views/AboutView.vue";
import {useUtilities} from "@/composables/useUtilities";
import Default from "@/views/layouts/Default.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      redirect:"/dashboard"
    },
    {
      path: '/dashboard',
      component: Default,
      children:[
        {
          name: "dashboard",
          path: "",
          component: HomeView
        },
        {
          path: 'schools',
          name: 'schools',
          component: AboutView
        },
        {
          path: 'settings',
          name: 'settings',
          component: AboutView
        },
      ]
    },

  ]
})

const { getToken } = useUtilities()

const isAuthenticated =  () => {
  return getToken() !== null;
}

export default router
