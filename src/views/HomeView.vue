<template>
  <main class="p-4 md:p-10 h-screen w-full">
    <Hero
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :visibleOnce="{ opacity: 1, y: 0 }"
    />
  </main>
</template>

<script setup>
import Hero from "@/components/home/Hero.vue";
</script>
