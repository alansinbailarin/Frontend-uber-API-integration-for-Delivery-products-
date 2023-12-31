<template>
  <input
    type="text"
    class="bg-gray-50 w-full mt-1 placeholder:text-gray-300 focus:border-indigo-300 rounded-md px-3 py-2 text-gray-800 border border-gray-200"
  />
</template>
<script setup>
const props = defineProps({
  type: {
    type: String,
    required: true,
  },
});
</script>
