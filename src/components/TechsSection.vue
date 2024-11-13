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
    <h1 class="p-12 md:p-24">Tech I'm familiar with...</h1>
    <div>
      <Vue3Marquee :pause-on-hover="true" :duration="50" :clone="true" class="">
        <div v-for="tech in scrambledTechs" :key="tech">
          <div
            class="relative h-20 w-20 border border-gray-200 m-5 scale-90 hover:scale-100 rounded-xl p-5 shadow-lg duration-800 transition-all"
          >
            <Icon
              :icon="tech"
              class="h-full w-full hover:scale-110 mx-auto duration-800 transition-all"
            />
          </div>
        </div>
      </Vue3Marquee>

      <Vue3Marquee :pause-on-hover="true" :duration="50" :clone="true" :direction="'reverse'">
        <div v-for="tech in scrambledTechs" :key="tech">
          <div
            class="relative h-20 w-20 border border-gray-200 m-5 scale-90 hover:scale-100 rounded-xl p-5 shadow-lg duration-800 transition-all"
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
