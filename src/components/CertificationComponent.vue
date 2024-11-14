<script setup>
import { useMouseInElement } from '@vueuse/core'
import { computed, ref } from 'vue'

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
  certification: Object,
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
  >
    <a
      :href="certification.link"
      class="flex flex-row bg-white scale-90 hover:scale-95 rounded-xl p-4 shadow-lg duration-800 transition-all"
      ref="target"
      :style="{ transform: hoverTransform, transition: 'transform 0.25s ease-out' }"
    >
      <div class="relative h-auto m-5 w-3/12">
        <img
          :src="certification.image"
          class="h-full w-full hover:scale-110 mx-auto duration-800 transition-all rounded-md"
        />
      </div>
      <div class="flex flex-col items-left justify-center px-3 w-9/12">
        <p class="text-sm lg:text-lg font-bold text-gray-800 mb-2">{{ certification.title }}</p>
        <p class="text-gray-700 leading-snug mb-1 text-sm md:text-base">
          {{ certification.subtitle }}
        </p>
      </div>
    </a>
  </div>
</template>

<style></style>
