<template>
  <div v-if="loading">
    <Loader />
  </div>
  <div v-else>
    <div v-if="quote?.success">
      <QuoteFound :quote="quote" />
    </div>
    <div v-else>
      <QuoteNotFound />
    </div>
  </div>
</template>
<script setup>
import { computed, ref, defineAsyncComponent } from "vue";
import moment from "moment";
import Loader from "../Loader.vue";

const QuoteFound = defineAsyncComponent(() =>
  import("@/components/quote/QuoteFound.vue")
);

const QuoteNotFound = defineAsyncComponent(() =>
  import("@/components/quote/QuoteNotFound.vue")
);

const props = defineProps({
  quote: {
    type: Object,
    required: true,
  },
  loading: {
    type: Boolean,
    required: true,
  },
});
</script>
