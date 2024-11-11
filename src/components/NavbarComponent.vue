<script setup>
import { ref, computed } from 'vue'
import { useScroll } from '@vueuse/core'

const isOpen = ref(false)
const { y } = useScroll(window)

function toggleMenu() {
  isOpen.value = !isOpen.value
}
const navbarBackground = computed(() => {
  return y.value > 0 || isOpen.value ? 'bg-white shadow-md' : 'bg-transparent'
})
</script>

<template>
  <nav
    :class="[
      `flex flex-col justify-between lg:flex-row px-8 lg:px-20 py-10 transition-all duration-300`,
      navbarBackground,
    ]"
  >
    <div class="flex flex-row justify-between">
      <h1 class="text-xl text-gray-800 font-bold">Adrian Kusuma</h1>

      <!-- Menu Toggle Icon for Mobile -->
      <label @click="toggleMenu" class="cursor-pointer lg:hidden block">
        <svg
          class="fill-current text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
    </div>
    <!-- Menu Items -->
    <div
      :class="{ block: isOpen, hidden: !isOpen }"
      class="lg:flex lg:items-center lg:w-auto w-full"
      id="menu"
    >
      <nav>
        <ul
          class="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12 first:pt-6 lg:first:pt-0"
        >
          <li class="font-semibold text-gray-700">
            <a class="hover:text-gray-900 transition ease-in-out duration-300" href="">Home</a>
          </li>
          <li class="font-semibold text-gray-700">
            <a class="hover:text-gray-900 transition ease-in-out duration-300" href="">About</a>
          </li>
          <li class="font-semibold text-gray-700">
            <a class="hover:text-gray-900 transition ease-in-out duration-300" href="">Projects</a>
          </li>
          <li class="font-semibold text-gray-700">
            <a class="hover:text-gray-900 transition ease-in-out duration-300" href="">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </nav>
</template>
