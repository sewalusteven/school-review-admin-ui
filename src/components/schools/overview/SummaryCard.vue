<script setup lang="ts">
import type {School} from "@/types/school-types";
import {useUtilities} from "@/composables/useUtilities";
interface ActiveSchoolProp {
  activeSchool: School
}
defineProps<ActiveSchoolProp>()

const { formatUgandanPhoneNumber } =  useUtilities()

</script>

<template>
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
        <span class=" text-xs ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis justo diam, rhoncus cursus lectus lobortis non. Mauris dignissim ultrices risus ut fringilla. Donec rutrum rutrum mauris eget fringilla. Quisque efficitur tortor et purus rutrum faucibus. Nam eget congue magna, sit amet faucibus mi. Maecenas condimentum lorem nunc, ut varius est ornare in. Ut ipsum erat, rhoncus id rutrum quis, iaculis id lectus. Vestibulum at porta sem. Phasellus in pulvinar dui. Donec commodo, diam at ornare posuere, quam ipsum facilisis nibh, et aliquet felis risus ac elit. In a ullamcorper sapien.
          </span>
      </div>

    </div>

  </div>
</template>

<style scoped>

</style>