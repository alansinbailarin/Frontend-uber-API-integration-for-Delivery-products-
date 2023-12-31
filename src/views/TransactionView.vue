<template>
  <div class="-my-12 h-screen flex items-center justify-center">
    <div>
      <CreateTransaction />
    </div>
  </div>
</template>
<script setup>
import { defineAsyncComponent } from "vue";

const CreateTransaction = defineAsyncComponent(() =>
  import("@/components/transactions/CreateTransaction.vue")
);
</script>
