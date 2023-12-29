<template>
  <div class="p-4 md:p-10 h-screen w-full">
    <Quote :quote="quote" :loading="loading" />
  </div>
</template>
<script setup>
import { onMounted, ref, defineAsyncComponent } from "vue";
import { useRoute } from "vue-router";
import QuoteService from "@/services/QuoteService";

const Quote = defineAsyncComponent(() =>
  import("@/components/quote/Quote.vue")
);

const props = defineProps({
  quote: {
    type: Object,
    required: true,
  },
});

const quote = ref(null);
const loading = ref(true);
const route = useRoute();
let customer_uuid = route.params.customer_uuid;
let access_token = route.params.access_token;

onMounted(() => {
  loading.value = true;
  QuoteService.getQuote(customer_uuid, access_token)
    .then((response) => {
      quote.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      loading.value = false;
    });
});
</script>
