<script setup>
import { RouterView } from 'vue-router'
import Navbar from '@/components/NavbarComponent.vue'
</script>

<template>
  <div class="relative min-h-screen">
    <Navbar class="fixed left-0 right-0 top-0 z-50" />
    <RouterView />
  </div>
</template>

<style>
:target {
  scroll-margin-top: 12vh;
}
html {
  scroll-behavior: smooth;
}
</style>
