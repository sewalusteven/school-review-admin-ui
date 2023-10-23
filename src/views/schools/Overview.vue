<script setup lang="ts">
import {useRoute} from "vue-router";
import {useSchoolStore} from "@/stores/schools";
import {useAuthStore} from "@/stores/auth";
import {computed, onMounted, reactive, watch} from "vue";
import type {School} from "@/types/school-types";
import {StarIcon as StarIconFull} from "@heroicons/vue/24/solid";
import {StarIcon} from "@heroicons/vue/24/outline";
import {useUtilities} from "@/composables/useUtilities";
import SummaryCard from "@/components/schools/overview/SummaryCard.vue";
import HistoryCard from "@/components/schools/overview/HistoryCard.vue";
import ReviewsCard from "@/components/schools/overview/ReviewsCard.vue";

const route =  useRoute()
const schoolStore =  useSchoolStore();
const authStore =  useAuthStore()

const { formatUgandanPhoneNumber } =  useUtilities()


const authResponse = computed(() => {
  return authStore.response;
})

const activeSchool = computed<School>(() => {
  return schoolStore.singleSchool ? schoolStore.singleSchool: {};
})

watch(authResponse, (val) => {
  if(authResponse.value !== null){
    schoolStore.fetchSchool(route.params.id)
  }
})

onMounted(() => {
  if(authResponse.value !== null){
    schoolStore.fetchSchool(route.params.id)
  }
})

const reviewData  = reactive({
  data: {
    rating: 1
  }
})


</script>

<template>
  <div class="container mx-auto bg-white shadow-md rounded-sm flex flex-col gap-5 p-6">
    <div class=" flex justify-between items-center mb-5">
      <h1 class="font-bold text-lg">{{ activeSchool?.name }}</h1>
     <span class="flex gap-2 items-center text-amber-400">
       <StarIconFull class="w-5 h-5" />
       <StarIconFull class="w-5 h-5" />
       <StarIconFull class="w-5 h-5" />
       <StarIcon class="w-5 h-5" />
       <StarIcon class="w-5 h-5" />
     </span>
    </div>

    <div class="flex gap-4 flex-col lg:flex-row">
      <img src="../../assets/macos.png" class="lg:max-w-xs rounded-sm object-center object-cover shadow border" />
      <SummaryCard :active-school="activeSchool" />
    </div>
    <HistoryCard />
    <ReviewsCard />
    <div class="flex flex-col gap-3 p-4" id="review-form">
      <span class="capitalize font-extralight text-2xl border-b pb-2">Write a review</span>
      <div id="form" class="flex flex-col gap-4 text-sm mt-2">
        <input type="text" class="p-2 border border-gray-700 rounded-sm shadow-sm lg:w-2/5 focus:outline-none" placeholder="Your Name">
        <input type="text" class="p-2 border border-gray-700 rounded-sm shadow-sm lg:w-2/5 focus:outline-none" placeholder="Title">
        <textarea type="text" class="p-2 border border-gray-700 rounded-sm shadow-sm h-40 focus:outline-none" placeholder="Review"></textarea>
        <div class="flex gap-5">
         <div class="flex gap-2 items-center">
           <input type="radio" class="w-5 h-5" value="1" v-model="reviewData.data.rating">
           <label class="font-bold"> 1 </label>
         </div>
         <div class="flex gap-2 items-center">
           <input type="radio" class="w-5 h-5" value="2" v-model="reviewData.data.rating">
           <label class="font-bold"> 2 </label>
         </div>
         <div class="flex gap-2 items-center">
           <input type="radio" class="w-5 h-5" value="3" v-model="reviewData.data.rating">
           <label class="font-bold"> 3 </label>
         </div>
         <div class="flex gap-2 items-center">
           <input type="radio" class="w-5 h-5" value="4" v-model="reviewData.data.rating">
           <label class="font-bold"> 4 </label>
         </div>
         <div class="flex gap-2 items-center">
           <input type="radio" class="w-5 h-5" value="5" v-model="reviewData.data.rating">
           <label class="font-bold"> 5 </label>
         </div>
        </div>
        <button class="px-2 py-3 bg-blue-950 text-white hover:bg-blue-900">Submit</button>
      </div>

    </div>



  </div>
</template>

<style scoped>

</style>