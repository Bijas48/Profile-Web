<script setup>
import EducationCardComponent from './EducationCardComponent.vue'
import { educations } from '@/constant'
</script>

<template>
  <Section class="relative mx-auto bg-inherit py-12 px-8 md:py-24 md:px-16 w-full"
    ><div class="w-full bg-slate-300 rounded-2xl shadow-md shadow-gray-500 flex flex-col p-7">
      <div
        class="relative flex flex-row items-center justify-center gap-2 hover:scale-100 scale-90 transition-all duration-300 mb-8"
      >
        <span class="w-2 h-2 bg-slate-800 rounded-full"></span>
        <span class="w-3 h-2 bg-slate-800 rounded-full"></span>
        <span class="w-5 h-2 bg-slate-800 rounded-full"></span>
        <span class="w-1/3 h-2 bg-slate-800 rounded-full"></span>
        <h1 class="text-xl sm:text-3xl lg:text-6xl font-bold text-slate-800 px-3 md:px-8">
          Education
        </h1>
        <span class="w-1/3 h-2 bg-slate-800 rounded-full"></span>
        <span class="w-5 h-2 bg-slate-800 rounded-full"></span>
        <span class="w-3 h-2 bg-slate-800 rounded-full"></span>
        <span class="w-2 h-2 bg-slate-800 rounded-full"></span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2">
        <EducationCardComponent
          v-for="education in educations"
          :key="education.title"
          :education="education"
        />
      </div>

      <div>Certificate</div>
    </div>
  </Section>
</template>

<style></style>
