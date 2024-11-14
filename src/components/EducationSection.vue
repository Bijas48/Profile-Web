<script setup>
import EducationCardComponent from './EducationCardComponent.vue'
import { certificates, educations } from '@/constant'
import CertificationComponent from './CertificationComponent.vue'
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

      <h1 class="text-xl sm:text-3xl lg:text-6xl font-bold text-slate-800 mt-10 px-3 md:px-8 ml-4">
        Certifications
      </h1>
      <h3 class="text-base sm:text-xl lg:text-3xl text-gray-700 px-3 pt-1 md:px-8 ml-4">
        Credentials I've earned...
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 mt-4">
        <CertificationComponent
          v-for="certification in certificates"
          :key="certification.title"
          :certification="certification"
        />
      </div>

      <a
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0 }"
        :variants="{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 30 },
        }"
        :visible="{ opacity: 1, y: 0 }"
        :duration="800"
        href="https://www.linkedin.com/in/adriankusumawk/details/certifications/"
        class="font-semibold relative text-slate-500 transition-colors duration-300 ease-in-out hover:text-slate-800 text-left md:text-center m-3"
      >
        Explore My Certifications
      </a>
    </div>
  </Section>
</template>

<style></style>
