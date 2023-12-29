// useCountdown.js
import { ref, computed, onMounted, onUnmounted } from "vue";

export const useCountdown = () => {
  const currentTime = ref(new Date());
  const minutesRemaining = ref(0);
  const secondsRemaining = ref(0);
  const formattedTimeRemaining = ref("");

  const calculateTimeRemaining = (expiresAt) => {
    const expiresDate = new Date(expiresAt);
    const difference = expiresDate - currentTime.value;
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    minutesRemaining.value = minutes;
    secondsRemaining.value = seconds;
    formattedTimeRemaining.value = `${minutes} minutes and ${seconds} seconds before the url expires`;

    return { minutes, seconds };
  };

  const updateCurrentTime = () => {
    currentTime.value = new Date();
  };

  onMounted(() => {
    // Actualiza la hora actual cada segundo
    setInterval(updateCurrentTime, 1000);
  });

  onUnmounted(() => {
    // Limpia el intervalo cuando el componente se desmonta
    clearInterval(updateCurrentTime);
  });

  return {
    calculateTimeRemaining,
    minutesRemaining,
    secondsRemaining,
    formattedTimeRemaining,
  };
};
