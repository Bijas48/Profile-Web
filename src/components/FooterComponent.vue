<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <Section
    class="relative mx-auto bg-inherit p-12 md:px-24 pb-4 w-full bg-slate-300 rounded-t-3xl"
    id="Contact"
  >
    <div class="flex flex-col justify-center items-center">
      <div class="text-xl md:text-4xl text-center text-slate-600 scale-95 font-semibold italic">
        ❝ Keep it
        <span class="hover:text-slate-800 duration-300 transition-all">Simple</span>
        &
        <span class="hover:text-slate-800 duration-300 transition-all">Practical</span> ❞
      </div>

      <div class="flex flex-row gap-4 items-center justify-start mt-8">
        <a
          href="https://www.linkedin.com/in/adriankusumawk/"
          class="text-slate-600 rounded-xl scale-90 hover:scale-100 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-gray-400"
        >
          <Icon class="h-8 w-8 sm:h-10 sm:w-10 lg:h-14 lg:w-14 p-2" icon="line-md:linkedin" />
        </a>
        <a
          href="https://github.com/bijas48/"
          class="text-slate-600 rounded-xl scale-90 hover:scale-100 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-gray-400"
        >
          <Icon class="h-8 w-8 sm:h-10 sm:w-10 lg:h-14 lg:w-14" icon="line-md:github-loop" />
        </a>
        <a
          href="https://www.instagram.com/adrian_k.w/"
          class="text-slate-600 rounded-xl scale-90 hover:scale-100 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-gray-400"
        >
          <Icon class="h-8 w-8 sm:h-10 sm:w-10 lg:h-14 lg:w-14" icon="line-md:instagram" />
        </a>
        <a
          href="mailto:adriankusumawk@gmail.com"
          class="text-slate-600 rounded-xl scale-90 hover:scale-100 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-gray-400"
        >
          <Icon class="h-8 w-8 sm:h-10 sm:w-10 lg:h-14 lg:w-14" icon="line-md:email-twotone" />
        </a>
      </div>
      <span class="w-full h-1 rounded-full bg-slate-500 my-3"></span>
      <div class="mb-2 space-x-2 text-base md:text-lg text-slate-600 inline-flex justify-center">
        <a href="https://www.linkedin.com/in/adriankusumawk/">Adrian Kusuma</a>
        <div>•</div>
        <div>© 2024</div>
      </div>
    </div>
  </Section>
</template>

<style scoped></style>
