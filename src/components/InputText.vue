<template>
  <input type="text" />
</template>
<script setup>
const props = defineProps({
  type: {
    type: String,
    required: true,
  },
});
</script>
