<script setup>
import { useMouseInElement } from '@vueuse/core'
import { Icon } from '@iconify/vue'
import { computed, ref } from 'vue'

const target = ref(null)
const showFullDescription = ref(false)

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
  project: Object,
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
    class="flex flex-col justify-center items-center mx-auto"
  >
    <div
      class="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full scale-90 hover:scale-100 transition-all duration-300 hover:shadow-2xl"
      ref="target"
      :style="{ transform: hoverTransform, transition: 'transform 0.25s ease-out' }"
    >
      <img :src="project.image" alt="Mountain" class="w-full h-64 object-cover" />
      <div class="p-6">
        <h2 class="text-2xl font-bold text-gray-800 mb-2">{{ project.title }}</h2>

        <p
          :class="{ 'line-clamp-4': !showFullDescription }"
          class="text-gray-700 leading-snug mb-4"
        >
          {{ project.desc }}
        </p>

        <button
          @click="showFullDescription = !showFullDescription"
          class="text-slate-500 hover:text-slate-800 font-semibold transition-all duration-300"
        >
          {{ showFullDescription ? 'Less' : 'More' }}
        </button>

        <div class="flex justify-between items-center mt-4">
          <div class="flex items-center">
            <a
              :href="project.link"
              class="relative flex items-center justify-start overflow-hidden font-medium transition-all bg-slate-300 rounded hover:bg-white group py-2 px-4 w-36"
            >
              <span
                class="w-36 h-48 rounded bg-slate-800 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"
              ></span>

              <div class="flex items-center space-x-2">
                <span
                  class="font-semibold relative text-slate-800 transition-colors duration-300 ease-in-out group-hover:text-white whitespace-nowrap"
                >
                  Check Repo
                </span>
                <Icon
                  icon="line-md:link"
                  class="relative text-slate-800 transition-colors duration-300 ease-in-out group-hover:text-white h-8"
                />
              </div>
            </a>
          </div>
          <span class="text-gray-600">{{ project.type }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
