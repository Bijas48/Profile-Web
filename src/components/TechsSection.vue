<script setup>
import { Icon } from '@iconify/vue'
import { Vue3Marquee } from 'vue3-marquee'

import { useTechsStore } from '@/stores/scrumbleList'

// Initialize the Pinia store
const techsStore = useTechsStore()

// Access the scrambled techs reactively
const scrambledTechs = techsStore.getScrambledTechs
</script>

<template>
  <section class="relative mx-auto bg-inherit w-full">
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
      class="px-12 py-6 md:px-24 md:py-9"
    >
      <h1 class="text-4xl md:text-8xl text-left text-slate-800 font-semibold">Technologies</h1>
      <h3 class="text-2xl md:text-5xl text-left text-gray-700 mt-4">I'm familiar with...</h3>
    </div>

    <div class="mb-10">
      <Vue3Marquee :pause-on-hover="true" :duration="50" :clone="false" class="">
        <div v-for="tech in scrambledTechs" :key="tech">
          <div
            class="relative h-20 w-20 md:h-32 md:w-32 border border-gray-200 m-5 scale-90 hover:scale-100 rounded-xl p-5 shadow-lg duration-800 transition-all"
          >
            <Icon
              :icon="tech"
              class="h-full w-full hover:scale-110 mx-auto duration-800 transition-all"
            />
          </div>
        </div>
      </Vue3Marquee>

      <Vue3Marquee :pause-on-hover="true" :duration="50" :clone="false" :direction="'reverse'">
        <div v-for="tech in scrambledTechs" :key="tech">
          <div
            class="relative h-20 w-20 md:h-32 md:w-32 border border-gray-200 m-5 scale-90 hover:scale-100 rounded-xl p-5 shadow-lg duration-800 transition-all"
          >
            <Icon
              :icon="tech"
              class="h-full w-full hover:scale-110 mx-auto duration-800 transition-all"
            />
          </div>
        </div>
      </Vue3Marquee>
    </div>
  </section>
</template>
