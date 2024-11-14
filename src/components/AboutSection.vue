<script setup>
import { useMouseInElement } from '@vueuse/core'
import { computed, ref } from 'vue'

const target = ref(null)

const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(target)

const hoverTransform = computed(() => {
  const MAX_ROTATION = 12

  const rX = (MAX_ROTATION / 2 - (elementY.value / elementHeight.value) * MAX_ROTATION).toFixed(2)
  const rY = ((elementX.value / elementWidth.value) * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2)

  return isOutside.value
    ? ''
    : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
})
</script>

<template>
  <div id="About" class="w-full">
    <div class="relative w-full overflow-hidden leading-[0]">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        class="relative block w-full h-[3rem] md:h-[6rem] bg-slate-300"
      >
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="fill-[#ffffff]"></path>
      </svg>
    </div>
    <section class="relative mx-auto bg-slate-300 p-12 md:p-24 w-full">
      <div
        ref="target"
        :style="{ transform: hoverTransform, transition: 'transform 0.25s ease-out' }"
        class="group flex flex-col text-left md:text-center scale-95 hover:scale-100 duration-300 transition-all"
      >
        <h1
          v-motion
          :initial="{ opacity: 0, x: -100 }"
          :enter="{ opacity: 1, x: 0 }"
          :variants="{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -100 },
          }"
          :visible="{ opacity: 1, x: 0 }"
          :duration="800"
          class="relative text-base sm:text-3xl lg:text-6xl font-bold text-gray-800"
        >
          About Me
        </h1>
        <p
          v-motion
          :initial="{ opacity: 0, x: -100 }"
          :enter="{ opacity: 1, x: 0 }"
          :variants="{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -100 },
          }"
          :visible="{ opacity: 1, x: 0 }"
          :duration="800"
          :delay="200"
          class="font-semibold text-xs sm:text-base lg:text-xl my-2 md:my-4"
        >
          I'm a student at UPI with a strong curiosity and a passion for trying new things. Learning
          and exploring are my main hobbies, I love diving deeper into various topics, though I
          admit I can be a bit "nosy" at times (not about others' business... well, maybe sometimes
          ).
        </p>
        <span
          class="absolute -bottom-1 left-0 w-0 transition-all h-1 bg-slate-800 group-hover:w-full rounded-full duration-500"
        ></span>
      </div>
    </section>

    <div class="relative w-full overflow-hidden leading-[0]">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        class="relative block w-full h-[3rem] md:h-[6rem] bg-inherit"
      >
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="fill-[#cbd5e1]"></path>
      </svg>
    </div>
  </div>
</template>

<style scoped></style>
