<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import Navbar from "./components/Navbar.vue";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <Navbar />
  <RouterView />
</template>
