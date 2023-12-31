<template>
  <button
    :type="type"
    class="mt-4 inline-flex items-center justify-center bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-all ease-in-out px-4 py-2 text-lg w-full text-center font-medium"
  >
    <slot></slot>
  </button>
</template>
<script setup>
const props = defineProps({
  type: {
    type: String,
    required: true,
  },
});
</script>
