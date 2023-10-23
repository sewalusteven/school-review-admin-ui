<template>
  <div class="w-full h-full min-h-screen bg-gray-200">
    <div class="w-full h-full flex flex-col lg:flex-row">
      <div v-if="sideMenuOpen" class="w-full lg:w-[15vw] border-r z-40 border-blue-950 shadow-blue-950 shadow-md bg-blue-950 text-white lg:min-h-screen transition-transform ease-in-out duration-300" :class="(sideMenuOpen)?'translate-x-0' :'translate-x-full'" >
        <SideMenu />
      </div>
      <div class="w-full bg-gray-200">
        <div class="flex flex-col">
          <NavBar @toggle="sideMenuOpen = !sideMenuOpen" />
          <div class="container mx-auto p-5">
            <BreadCrumbs />
            <RouterView />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script setup lang="ts">
import {RouterView} from "vue-router";
import SideMenu from "@/views/layouts/SideMenu.vue";
import NavBar from "@/views/layouts/NavBar.vue";
import {ref} from "vue";
import BreadCrumbs from "@/components/BreadCrumbs.vue";

const sideMenuOpen =  ref<boolean>(true);
</script>