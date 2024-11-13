<script setup>
import TimelineComponent from './TimelineComponent.vue'
</script>

<template>
  <section class="relative mx-auto bg-inherit p-12 md:px-24 w-full" id="Experience">
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
      class="flex flex-col"
    >
      <div
        class="relative flex flex-row items-center justify-center gap-2 hover:scale-100 scale-90 transition-all duration-300 mb-8"
      >
        <span class="w-2 h-2 bg-slate-800 rounded-full"></span>
        <span class="w-3 h-2 bg-slate-800 rounded-full"></span>
        <span class="w-5 h-2 bg-slate-800 rounded-full"></span>
        <span class="w-1/3 h-2 bg-slate-800 rounded-full"></span>
        <h1 class="text-xl sm:text-3xl lg:text-6xl font-bold text-slate-800 px-3 md:px-8">
          Experiences
        </h1>
        <span class="w-1/3 h-2 bg-slate-800 rounded-full"></span>
        <span class="w-5 h-2 bg-slate-800 rounded-full"></span>
        <span class="w-3 h-2 bg-slate-800 rounded-full"></span>
        <span class="w-2 h-2 bg-slate-800 rounded-full"></span>
      </div>
    </div>
    <TimelineComponent />
  </section>
</template>

<style scoped></style>
