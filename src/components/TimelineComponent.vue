<script setup>
import Timeline from 'primevue/timeline'
import { Icon } from '@iconify/vue'
import { useWindowSize } from '@vueuse/core'
import { ref } from 'vue'
import { experiences } from '@/constant'

const { width } = useWindowSize()

const showFullDescription = ref(false)

const events = ref(experiences)
</script>

<template>
  <Timeline :value="events" :align="width >= 768 ? 'alternate' : ''" class="w-full">
    <template #marker="slotProps">
      <span
        class="flex w-14 h-14 md:w-20 md:h-20 items-center justify-center text-white rounded-md z-10 shadow-sm bg-slate-800 p-1 md:p-2 scale-90 hover:scale-100 transition-all duration-300"
      >
        <img
          :src="slotProps.item.image"
          alt="Image"
          class="object-cover rounded-sm"
          v-motion
          :initial="{ opacity: 0, scale: 0.8 }"
          :enter="{ opacity: 1, scale: 1 }"
          :visible="{ opacity: 1, scale: 1 }"
          :duration="700"
          :easing="'ease-out'"
        />
      </span>
    </template>

    <template #connector="slotProps">
      <span
        :class="['flex w-1 md:w-2 bg-slate-800', slotProps.item.color]"
        class="h-full block mx-auto rounded-md md:rounded -my-3"
      ></span>
    </template>

    <template #content="slotProps">
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
          class="bg-white rounded-lg shadow-lg overflow-hidden w-full scale-90 hover:scale-100 transition-all duration-300 hover:shadow-2xl"
          ref="target"
        >
          <div class="p-6 text-left">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">{{ slotProps.item.title }}</h2>
            <p class="text-sm text-gray-500 mb-2">{{ slotProps.item.date }}</p>

            <div
              :class="{ 'line-clamp-4': !showFullDescription }"
              class="text-gray-700 leading-snug mb-1"
            >
              <ul class="px-5">
                <li v-for="(line, index) in slotProps.item.desc" :key="index" class="list-disc">
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

            <div class="flex justify-between items-center mt-4">
              <a
                :href="slotProps.item.link"
                class="text-slate-500 hover:text-slate-800 font-semibold transition-all duration-300 py-2 px-4 w-36"
              >
                <div class="flex items-center space-x-2 group">
                  <span
                    class="text-slate-500 group-hover:text-slate-800 font-semibold transition-all duration-300"
                  >
                    Find Out!
                  </span>
                  <Icon
                    icon="line-md:external-link"
                    class="relative text-slate-500 ease-in-out group-hover:text-slate-800 h-8 transition-all duration-300"
                  />
                </div>
              </a>
              <span class="text-gray-600 text-sm md:text-base">{{ slotProps.item.type }}</span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Timeline>
</template>

<style></style>
