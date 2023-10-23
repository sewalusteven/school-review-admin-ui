import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Schools from "@/views/Schools.vue";
import Default from "@/views/layouts/Default.vue";
import Overview from "@/views/schools/Overview.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      redirect:"/dashboard"
    },
    {
      path: '/dashboard',
      name: "dashboard",
      component: Default,
      children:[
        {

          path: "",
          component: HomeView
        },
        {
          path: 'schools',
          name:"schools",
          children: [
            {

              path:"",
              component: Schools
            },
            {
              path:":id",
              name:"overview",
              component: Overview
            }
          ]
        },
        {
          path: 'settings',
          name: 'settings',
          component: Schools
        },
      ]
    },

  ]
})

export default router
