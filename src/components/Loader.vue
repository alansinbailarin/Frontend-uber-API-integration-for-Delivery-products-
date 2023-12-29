<template>
  <div class="h-screen flex items-center justify-center">
    <l-tail-chase size="40" speed="1.75" color="#6875F5"></l-tail-chase>
  </div>
</template>

<script setup>
import { tailChase } from "ldrs";

tailChase.register();
</script>
