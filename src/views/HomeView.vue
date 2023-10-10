<template>
  <div class="bg-white w-full rounded-sm shadow p-6">
    <h2 id="header" class="capitalize mb-5 font-medium text-xl">Dashboard</h2>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
      <div class="rounded-lg p-5 bg-gradient-to-br from-indigo-800 to-sky-500 text-white shadow-md flex gap-2 justify-between items-center">
        <div class="flex flex-col gap-2">
          <span class="mb-3 text-sm">Schools</span>
          <span class="text-4xl font-bold">5,379</span>
        </div>
        <BuildingLibraryIcon class="w-20 h-20"/>
      </div>
      <div class="rounded-lg p-5 bg-gradient-to-br from-gray-800 to-sky-500 text-white shadow-md flex gap-2 justify-between items-center">
        <div class="flex flex-col gap-2">
          <span class="mb-3 text-sm">Users</span>
          <span class="text-4xl font-bold">5,379</span>
        </div>
        <UsersIcon class="w-20 h-20"/>
      </div>
      <div class="rounded-lg p-5 bg-gradient-to-br from-green-800 to-violet-500 text-white shadow-md flex gap-2 justify-between items-center">
        <div class="flex flex-col gap-2">
          <span class="mb-3 text-sm">Reviews</span>
          <span class="text-4xl font-bold">5,379</span>
        </div>
        <StarIcon class="w-20 h-20"/>
      </div>
      <div class="rounded-lg p-5 bg-gradient-to-br from-green-800 to-violet-500 text-white shadow-md flex gap-2 justify-between items-center">
        <div class="flex flex-col gap-2">
          <span class="mb-3 text-sm">No. Schools</span>
          <span class="text-4xl font-bold">5,379</span>
        </div>
        <BuildingLibraryIcon class="w-20 h-20"/>
      </div>


    </div>

  </div>
</template>
<script setup lang="ts">
import {reactive} from "vue";
import {BuildingLibraryIcon, StarIcon, UsersIcon} from "@heroicons/vue/24/outline";

interface dataObj {
  activeTab: string
}

const data =  reactive<dataObj>({
  activeTab:'overview'
})

const changeTab = (tabId: string):void => {
  data.activeTab =  tabId;
}


</script>