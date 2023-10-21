<script setup lang="ts">
import type { ISchoolsTableProps} from "@/types/school-types";
import dateFormat from "dateformat";
import {EyeIcon, TrashIcon, PencilSquareIcon} from "@heroicons/vue/24/outline";
import {useCurriculumStore} from "@/stores/curriculums";
import {computed} from "vue";
import {Curriculum} from "@/types/curriculum-types";
import {useUtilities} from "@/composables/useUtilities";

const curriculumStore =  useCurriculumStore()
const props = defineProps<ISchoolsTableProps>()

const curriculums =  computed<Curriculum[]>(() => {
  return (curriculumStore.curriculums && curriculumStore.curriculums.length !== 0)? curriculumStore.curriculums:[]
})

const { formatUgandanPhoneNumber } =  useUtilities()


</script>

<template>

  <div class="relative overflow-x-auto shadow-md sm:rounded-sm sm:border">
    <table class="w-full text-sm text-left">
      <thead class="text-xs text-gray-700 uppercase bg-blue-50">
      <tr>
        <th scope="col" class="px-6 py-3">
          School
        </th>
        <th scope="col" class="px-6 py-3">
          District
        </th>
        <th scope="col" class="px-6 py-3">
          Phone
        </th>
        <th scope="col" class="px-6 py-3">
          Reviews
        </th>
        <th scope="col" class="px-6 py-3">
          Created
        </th>
        <th scope="col" class="px-6 py-3">
          Action
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-if="schools.length !== 0" v-for="school in schools" :key="school.id" class="bg-white border-b hover:bg-gray-50 ">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
         {{school.name}}
        </th>
        <td class="px-6 py-4">
          {{school.district.name}}
        </td>
        <td class="px-6 py-4">
          {{school.phoneNumber ? formatUgandanPhoneNumber(school.phoneNumber): 'N/A'}}
        </td>
        <td class="px-6 py-4">
          {{ school.reviews.length }}
        </td>
        <td class="px-6 py-4">
         {{ dateFormat(school.createdAt, "d mmmm , yyyy") }}
        </td>
        <td class="px-6 py-4 flex gap-2">
          <RouterLink :to="`/dashboard/schools/${school.id}`" class="font-medium text-blue-600  hover:underline"> <EyeIcon class="w-5 h-5" /></RouterLink>
          <a href="#" class="font-medium text-green-600 hover:underline"> <PencilSquareIcon class="w-5 h-5" /></a>
          <a href="#" class="font-medium text-red-600 hover:underline"> <TrashIcon class="w-5 h-5" /></a>
        </td>
      </tr>
      <tr v-else class="bg-white border-b hover:bg-gray-50 ">
        <th scope="row" colspan="6" class="px-6 py-4 font-medium uppercase text-gray-900 whitespace-nowrap text-center ">
         No Schools Found !!!
        </th>
      </tr>

      </tbody>
    </table>
  </div>

</template>

<style scoped>

</style>