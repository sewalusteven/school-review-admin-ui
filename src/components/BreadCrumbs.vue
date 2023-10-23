<template>
  <nav
      class="flex mb-5"
      aria-label="Breadcrumb"
  >
    <ol
        role="list"
        class="flex items-center space-x-4"
    >
      <li>
        <div>
          <RouterLink
              to="/dashboard"
              class="text-gray-400 hover:text-gray-500"
          >
            <HomeIcon
                class="h-5 w-5 flex-shrink-0"
                aria-hidden="true"
            />
            <span class="sr-only">Home</span>
          </RouterLink>
        </div>
      </li>
      <li
          v-for="r in routes"
          :key="r.name"
      >
        <div class="flex items-center">
          <ChevronRightIcon
              class="h-5 w-5 flex-shrink-0 text-gray-400"
              aria-hidden="true"
          />
          <RouterLink
              :to="r.path"
              class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 capitalize"
              :aria-current="route.path ? 'page' : undefined"
          >{{ r.name }}</RouterLink>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { ChevronRightIcon, HomeIcon } from '@heroicons/vue/20/solid'
import {useRoute} from "vue-router";
import {computed} from "vue";
const route =  useRoute()

const routes =  computed(() => {
  return route.matched.filter(r => r.name !== undefined).map(f => {
    let finalPath = f.path;
    if(f.path.split("/").includes(':id')){
      finalPath = route.path
    }
    return {
      name: f.name,
      path: finalPath
    }
  });
})

</script>
