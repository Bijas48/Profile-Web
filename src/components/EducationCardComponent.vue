<script setup>
import { useMouseInElement } from '@vueuse/core'
import { computed, ref } from 'vue'

const showFullDescription = ref(false)
const target = ref(null)

const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(target)

const hoverTransform = computed(() => {
  const MAX_ROTATION = 6

  const rX = (MAX_ROTATION / 2 - (elementY.value / elementHeight.value) * MAX_ROTATION).toFixed(2)
  const rY = ((elementX.value / elementWidth.value) * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2)

  return isOutside.value
    ? ''
    : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
})

defineProps({
  education: Object,
})
</script>

<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0 }"
    :variants="{
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 100 },
    }"
    :visible="{ opacity: 1, y: 0 }"
    :duration="800"
    class="flex flex-col justify-center items-center mx-auto w-full"
  >
    <div
      class="bg-white rounded-lg shadow-lg overflow-hidden scale-90 hover:scale-100 transition-all duration-300 hover:shadow-2xl w-full cursor-pointer"
      ref="target"
      :style="{ transform: hoverTransform, transition: 'transform 0.25s ease-out' }"
    >
      <div class="p-6 text-left">
        <div class="inline-flex space-x-3 items-center mb-3">
          <div class="w-2/12 relative">
            <div class="h-14 w-14 p-1 bg-white shadow-md shadow-gray-400 rounded-full mx-auto">
              <img class="w-full h-full object-cover rounded-full" :src="education.image" />
            </div>
          </div>
          <div class="w-10/12 h-fit">
            <h2 class="text-sm lg:text-lg font-bold text-gray-800 mb-2">{{ education.title }}</h2>
            <p class="text-sm text-gray-500 mb-2">{{ education.date }}</p>
          </div>
        </div>

        <div
          :class="{ 'line-clamp-4': !showFullDescription }"
          class="text-gray-700 leading-snug mb-1"
        >
          <ul class="px-5">
            <li v-for="(line, index) in education.desc" :key="index" class="list-disc">
              {{ line }}
            </li>
          </ul>
        </div>

        <button
          @click="showFullDescription = !showFullDescription"
          class="text-slate-500 hover:text-slate-800 font-semibold transition-all duration-300 px-5"
        >
          {{ showFullDescription ? 'Less' : 'More' }}
        </button>
      </div>
    </div>
  </div>
</template>
