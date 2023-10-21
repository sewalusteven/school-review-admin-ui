<script setup lang="ts">
import {useRoute} from "vue-router";
import {useSchoolStore} from "@/stores/schools";
import {useAuthStore} from "@/stores/auth";
import {computed, onMounted, watch} from "vue";
import type {School} from "@/types/school-types";
import {StarIcon as StarIconFull} from "@heroicons/vue/24/solid";
import {StarIcon} from "@heroicons/vue/24/outline";
import {useUtilities} from "@/composables/useUtilities";

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


</script>

<template>
  <div class="container mx-auto bg-white shadow-md rounded-sm flex flex-col gap-5 p-6">
    <div class=" flex justify-between items-center">
      <h1 class="font-bold text-lg">{{ activeSchool?.name }}</h1>
     <span class="flex gap-2 items-center text-amber-400">
       <StarIconFull class="w-5 h-5" />
       <StarIconFull class="w-5 h-5" />
       <StarIconFull class="w-5 h-5" />
       <StarIcon class="w-5 h-5" />
       <StarIcon class="w-5 h-5" />
     </span>
    </div>
    <div class="bg-gray-900 text-white p-4 rounded-sm shadow-md grid lg:grid-cols-2">
      <div class="flex flex-col gap-5">
        <div class="flex flex-col gap-2">
          <span class="capitalize text-sm ">Curriculum</span>
          <span class="uppercase font-bold text-sm ">{{ activeSchool?.curriculum?.name ? activeSchool.curriculum.name: 'N/A' }}</span>
        </div>
        <div class="flex flex-col gap-2">
          <span class="capitalize text-sm ">Level</span>
          <span class="uppercase font-bold text-sm ">{{ activeSchool?.academicLevel?.level ? activeSchool.academicLevel.level : 'N/A' }}</span>
        </div>
        <div class="flex flex-col gap-2">
          <span class="capitalize text-sm ">District</span>
          <span class="uppercase font-bold text-sm ">{{ activeSchool?.district?.name ? activeSchool.district.name : "N/A" }}</span>
        </div>
        <div class="flex flex-col gap-2">
          <span class="capitalize text-sm ">Address</span>
          <span class="uppercase font-bold text-sm ">{{ activeSchool.address ? activeSchool.address:'N/A' }}</span>
        </div>

      </div>
      <div class="flex flex-col gap-5">
        <div class="flex flex-col gap-2">
          <span class="capitalize text-sm ">Email</span>
          <span class="uppercase font-bold text-sm ">{{ activeSchool.email ? activeSchool.email:'N/A' }}</span>
        </div>
        <div class="flex flex-col gap-2">
          <span class="capitalize text-sm ">Phone Number</span>
          <span class="uppercase font-bold text-sm ">{{ activeSchool?.phoneNumber ? formatUgandanPhoneNumber(activeSchool?.phoneNumber): 'N/A' }}</span>
        </div>

        <div class="flex flex-col gap-2">
          <span class="capitalize text-sm font-bold">About the School</span>
          <span class=" text-sm ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis justo diam, rhoncus cursus lectus lobortis non. Mauris dignissim ultrices risus ut fringilla. Donec rutrum rutrum mauris eget fringilla. Quisque efficitur tortor et purus rutrum faucibus. Nam eget congue magna, sit amet faucibus mi. Maecenas condimentum lorem nunc, ut varius est ornare in. Ut ipsum erat, rhoncus id rutrum quis, iaculis id lectus. Vestibulum at porta sem. Phasellus in pulvinar dui. Donec commodo, diam at ornare posuere, quam ipsum facilisis nibh, et aliquet felis risus ac elit. In a ullamcorper sapien.
          </span>
        </div>

      </div>

    </div>
    <div class="flex flex-col p-4">
      <span class="capitalize font-extralight text-2xl ">History</span>
      <span class="text-sm flex flex-col gap-2">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget iaculis nisl, ut sagittis massa. In sed felis non velit ornare iaculis et non justo. Fusce feugiat tellus sed lectus pulvinar, nec facilisis urna blandit. Quisque nec euismod tellus. Mauris non velit ac justo aliquet consequat nec id turpis. Nullam ornare ac nulla non pulvinar. Morbi non tortor blandit sapien tristique eleifend sit amet nec magna. Aenean faucibus lectus orci, a tincidunt neque fermentum sit amet. Donec porta sed justo vel pharetra. Duis luctus tempus gravida. Fusce arcu nunc, mattis sit amet lobortis sed, luctus sed nulla. In a sem dui. Sed quis ante nisi. Nunc ut scelerisque elit. Fusce et volutpat nulla, id venenatis nulla.</p>
        <p>Curabitur malesuada nunc nibh, ut condimentum erat convallis a. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Quisque id molestie ligula. Suspendisse dignissim velit ac eros lacinia, vel cursus justo venenatis. Ut molestie pellentesque consequat. Suspendisse potenti. Vestibulum ac leo condimentum, volutpat metus non, elementum libero.</p>
        <p>Curabitur id dolor felis. Fusce ornare nunc id purus tempor iaculis. Praesent pellentesque lectus enim, at consequat mi condimentum nec. Duis bibendum mi lacus. Pellentesque eleifend libero eu dolor fringilla, in porttitor nulla auctor. Morbi dui erat, dictum non pellentesque quis, interdum lobortis magna. Aliquam erat volutpat. Cras et urna condimentum, consequat orci ut, volutpat augue. Mauris at vestibulum dolor, vitae ornare dolor. Pellentesque molestie, libero vitae luctus mattis, augue lorem dapibus mi, ac laoreet diam nulla id nisi. Praesent dignissim eleifend dolor vel hendrerit. In ut nisi nisi. Nulla nulla odio, laoreet rutrum tincidunt ac, facilisis et metus. Duis sollicitudin purus eu erat faucibus, sit amet pharetra metus dictum. Phasellus quis tempus elit</p>
      </span>
    </div>

  </div>
</template>

<style scoped>

</style>