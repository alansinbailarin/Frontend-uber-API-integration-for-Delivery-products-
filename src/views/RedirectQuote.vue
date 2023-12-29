<template>
  <Loader />
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import Loader from "@/components/Loader.vue";

onMounted(() => {
  const router = useRouter();
  const route = useRoute();
  const accessToken = route.params.access_token;
  const locale = route.params.locale;
  router.push({
    name: "quote",
    params: {
      locale: locale,
      customer_uuid: route.params.customer_uuid,
      access_token: accessToken,
    },
  });
});
</script>
