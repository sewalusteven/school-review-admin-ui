<script setup lang="ts">
import { useRoute, useRouter} from "vue-router";
import { BuildingLibraryIcon, ChartPieIcon, PowerIcon, FolderOpenIcon } from "@heroicons/vue/24/outline"
import {onMounted, ref} from "vue";
import {keycloakInstance} from "@/services/keycloak";


const activeItem = ref<string>('dashboard')
const router  = useRouter()
const route = useRoute()

const routeTo = (routePath: string, activeName: string) => {
  activeItem.value = activeName;
  router.push(routePath)
}

const logout = () => {
  keycloakInstance.logout()
}

onMounted(() => {
  activeItem.value = <string>route.name
})
</script>

<template>
<div class="p-3 flex-col flex lg:h-full">
  <span class="uppercase font-medium mb-5"><img src="../../assets/logo.svg"></span>
  <div class="flex flex-col justify-between text-sm capitalize lg:h-full">
    <div class="flex flex-col gap-2 ">
      <button  @click="routeTo('/dashboard', 'dashboard')" class="hover:bg-blue-900 p-2 rounded-md flex gap-2 items-center" :class="(activeItem === 'dashboard')?'bg-blue-900':''">
        <ChartPieIcon class="w-4 h-4" />
        <span>Dashboard</span>
      </button>
      <button @click="routeTo('/dashboard/schools','schools')" class="hover:bg-blue-900 p-2 rounded-md flex gap-2 items-center" :class="(activeItem === 'schools')?'bg-blue-900':''">
        <BuildingLibraryIcon class="w-4 h-4" />
        <span>Schools</span>
      </button>
      <button @click="routeTo('/dashboard/settings','settings')" class="hover:bg-blue-900 p-2 rounded-md flex gap-2 items-center" :class="(activeItem === 'settings')?'bg-blue-900':''">
        <FolderOpenIcon class="w-4 h-4" />
        <span>Curriculums</span>
      </button>
    </div>
    <button @click="logout" class="hover:bg-blue-900 p-2 rounded-md flex gap-2 items-center">
      <PowerIcon class="w-4 h-4" />
      <span>Logout</span>
    </button>

  </div>

</div>
</template>

<style scoped>

</style>