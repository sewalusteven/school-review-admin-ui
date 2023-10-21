<template>
  <div class="container mx-auto bg-white shadow-md rounded-sm ">
    <div class="p-4 flex justify-between items-center">
      <h1 class="font-bold text-lg">Schools</h1>
      <button class="p-2 bg-blue-950 text-white rounded-sm shadow-sm"> + New School</button>
    </div>

    <hr />
    <div class=" flex flex-col gap-3 p-4 ">
      <div class="flex gap-2 items-center lg:w-2/5 w-full text-gray-600 border py-2 px-3 rounded-sm border-gray-200">
        <MagnifyingGlassIcon class="w-5 h-5" />
        <input type="text" v-model="queryTerm" @keyup.enter="schoolStore.searchSchools(1,queryTerm.toUpperCase())" @change="schoolStore.searchSchools(1,queryTerm.toUpperCase())" placeholder="Search by Name" class="focus:outline-none w-full" >
      </div>

      <SchoolsTable :schools="schools" />
      <div class="flex gap-3 p-2 justify-end">
        <button @click="previousPage" class="px-2 py-1 border border-blue-600 text-blue-900  flex items-center"><ChevronLeftIcon class="w-5 h-5" /></button>
        <span class="px-3 py-1 border border-blue-600 text-blue-900 font-bold">{{currentPage}}</span>
        <button @click="nextPage" class="px-2 py-1 border border-blue-600 text-blue-900  flex items-center"><ChevronRightIcon class="w-5 h-5" /></button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {useSchoolStore} from "@/stores/schools";
import {computed, onMounted, ref, watch} from "vue";
import type {School} from "@/types/school-types";
import SchoolsTable from "@/components/schools/SchoolsTable.vue";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/vue/24/outline";
import {useAuthStore} from "@/stores/auth";
import {useCurriculumStore} from "@/stores/curriculums";
import {MagnifyingGlassIcon} from "@heroicons/vue/24/outline";


const schoolStore =  useSchoolStore()
const curriculumStore =  useCurriculumStore()
const authStore = useAuthStore();

const queryTerm =  ref<string>("")

const schools =  computed<School[]>(() => {
  return (schoolStore.schools && schoolStore.schools.length !== 0)? schoolStore.schools:[]
})

const currentPage =  computed<number>(() => {
  return schoolStore.currPage;
})

const nextPage =  () => {
  if(queryTerm.value !== ""){
    schoolStore.searchSchools(currentPage.value + 1, queryTerm.value.toUpperCase())
  }else{
    schoolStore.fetchSchools(currentPage.value + 1)
  }
}
const previousPage =  () => {
  if(currentPage.value > 1){
    if(queryTerm.value !== ""){
      schoolStore.searchSchools(currentPage.value - 1, queryTerm.value.toUpperCase())
    }else{
      schoolStore.fetchSchools(currentPage.value - 1)
    }

  }
}

const authResponse = computed(() => {
  return authStore.response;
})

watch(authResponse, (val) => {
  if(authResponse.value !== null){
    schoolStore.fetchSchools()
    curriculumStore.fetchCurriculums()
  }
})

onMounted(() => {
  if(authResponse.value !== null){
    schoolStore.fetchSchools()
    curriculumStore.fetchCurriculums()
  }
})

</script>

<style>

</style>
