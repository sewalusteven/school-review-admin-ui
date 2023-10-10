<script setup lang="ts">
import {Bars3Icon, XMarkIcon} from "@heroicons/vue/24/outline";
import {ref} from "vue";

const emit = defineEmits(['toggle'])
const switchIcon =  ref<boolean>(true)

const toggleSideMenu = (): void => {
  switchIcon.value = !switchIcon.value
  emit('toggle')
}

</script>

<template>
  <div class="bg-white w-full py-3 p-1 flex justify-between items-center border-b shadow-sm">
    <div>
      <button @click="toggleSideMenu">
        <Bars3Icon v-if="switchIcon"  class="w-5 h-5"/>
        <XMarkIcon v-if="!switchIcon"  class="w-5 h-5"/>
      </button>
    </div>
    <div class="text-sm">
      <span>smstoroc</span>
    </div>
  </div>
</template>

<style scoped>

</style>