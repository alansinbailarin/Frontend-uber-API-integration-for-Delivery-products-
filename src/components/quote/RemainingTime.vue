<template>
  <div class="md:absolute md:right-8 md:top-28 text-center">
    <div
      class="px-4 py-2 rounded-full shadow-sm"
      :class="{
        'bg-green-100 text-green-500':
          minutesRemaining < 60 && minutesRemaining >= 30,
        'bg-yellow-100 text-yellow-500':
          minutesRemaining < 30 && minutesRemaining >= 15,
        'bg-red-100 text-red-500': minutesRemaining < 15,
      }"
    >
      <p>{{ formattedTimeRemaining }}</p>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useCountdown } from "@/composables/useCountdown.js";

const router = useRouter();
const route = useRoute();

const {
  calculateTimeRemaining,
  minutesRemaining,
  formattedTimeRemaining,
  secondsRemaining,
} = useCountdown();

const props = defineProps({
  quote: {
    type: Object,
    required: true,
  },
});

const expiresAt = ref(props.quote?.data.expires_at);

onMounted(() => {
  const accessToken = route.params.access_token;
  const locale = route.params.locale;
  calculateTimeRemaining(expiresAt.value); // Calcula el tiempo inmediatamente después de montar

  const intervalId = setInterval(() => {
    calculateTimeRemaining(expiresAt.value);
    if (!document.hidden) {
      if (minutesRemaining.value < 1 && secondsRemaining.value < 1) {
        router.push({
          name: "expired",
          params: {
            locale: locale,
            customer_uuid: route.params.customer_uuid,
            access_token: accessToken,
          },
        });
      }
    }
  }, 1000);

  onUnmounted(() => {
    clearInterval(intervalId);
  });

  // Detener el temporizador cuando la pestaña se vuelve invisible
  const visibilityChangeHandler = () => {
    if (document.hidden) {
      clearInterval(intervalId);
    } else {
      // Si la pestaña se vuelve visible nuevamente, reinicia el temporizador
      calculateTimeRemaining(expiresAt.value);
    }
  };

  document.addEventListener("visibilitychange", visibilityChangeHandler);

  // Limpiar el event listener cuando el componente se desmonta
  onUnmounted(() => {
    document.removeEventListener("visibilitychange", visibilityChangeHandler);
  });
});
</script>
