<script setup lang="ts">
import {StarIcon as StarIconFull} from "@heroicons/vue/24/solid";
import {StarIcon} from "@heroicons/vue/24/outline";
</script>

<template>
  <div class="flex flex-col gap-3 p-4">
    <span class="capitalize font-extralight text-2xl border-b pb-2">Reviews</span>
    <div id="reviews" class="flex flex-col text-xs gap-2 w-full">
      <div id="card" class="flex flex-col gap-2 p-2 border rounded-md shadow">
        <div class="flex gap-2 items-center">
          <img src="https://picsum.photos/200/200" class="w-10 h-10 rounded-full border-black shadow-sm">
          <div class="flex flex-col">
            <span>Sewalu Mukasa Steven</span>
            <div class="flex text-amber-400">
              <StarIconFull class="w-5 h-5" />
              <StarIconFull class="w-5 h-5" />
              <StarIconFull class="w-5 h-5" />
              <StarIcon class="w-5 h-5" />
              <StarIcon class="w-5 h-5" />
            </div>
          </div>
        </div>
        <span id="review">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget iaculis nisl, ut sagittis massa. In sed felis non velit ornare iaculis et non justo. Fusce feugiat tellus sed lectus pulvinar, nec facilisis urna blandit. Quisque nec euismod tellus. Mauris non velit ac justo aliquet consequat nec id turpis. Nullam ornare ac nulla non pulvinar. Morbi non tortor blandit sapien tristique eleifend sit amet nec magna. Aenean faucibus lectus orci, a tincidunt neque fermentum sit amet. Donec porta sed justo vel pharetra. Duis luctus tempus gravida. Fusce arcu nunc, mattis sit amet lobortis sed, luctus sed nulla. In a sem dui. Sed quis ante nisi. Nunc ut scelerisque elit. Fusce et volutpat nulla, id venenatis nulla.</p>
          </span>
      </div>

    </div>

  </div>
</template>

<style scoped>

</style>