<script setup>
import { projects } from '@/constant'
import CardsComponent from './CardsComponent.vue'
</script>

<template>
  <section class="relative mx-auto bg-inherit p-12 md:p-24 w-full" id="Projects">
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
          Projects
        </h1>
        <span class="w-1/3 h-2 bg-slate-800 rounded-full"></span>
        <span class="w-5 h-2 bg-slate-800 rounded-full"></span>
        <span class="w-3 h-2 bg-slate-800 rounded-full"></span>
        <span class="w-2 h-2 bg-slate-800 rounded-full"></span>
      </div>
      <div
        class="grid grid-col-1 lg:grid-cols-3 md:grid-cols-2 gap-8 gap-y-14 place-content-center"
      >
        <CardsComponent v-for="project in projects" :key="project.title" :project="project" />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
