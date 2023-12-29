<template>
  <Transition :duration="550" name="nested">
    <RemainingTime
      :quote="quote"
      @click="toggleRemainingTime()"
      v-show="isOpen"
    />
  </Transition>
  <Transition :duration="550" name="nested">
    <button
      class="absolute right-6 top-[6rem] md:right-8 md:top-[7rem] items-center bg-gray-200 text-gray-500 px-1 py-2 rounded-lg"
      @click="toggleRemainingTime()"
      v-show="!isOpen"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        class="bi bi-chevron-compact-left"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"
        />
      </svg>
    </button>
  </Transition>
</template>
<script setup>
import RemainingTime from "@/components/quote/RemainingTime.vue";
import { ref, computed } from "vue";

const isOpen = ref(true);

const toggleRemainingTime = () => {
  isOpen.value = !isOpen.value;
};

const props = defineProps({
  quote: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}
/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateX(100px);
  opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.5s ease-in-out;
}
/* delay enter of nested element */
.nested-enter-active .inner {
  transition-delay: 0.5s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  /*
  	Hack around a Chrome 96 bug in handling nested opacity transitions.
    This is not needed in other browsers or Chrome 99+ where the bug
    has been fixed.
  */
}
</style>
