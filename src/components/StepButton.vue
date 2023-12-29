<template>
  <button :class="[`w-96 text-left px-3 py-2 rounded-md `]">
    <p :class="` font-medium`">{{ title }}</p>
    <p :class="`font-thin mt-1 `">{{ subtitle }}</p>
  </button>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: false,
  },
});
</script>
