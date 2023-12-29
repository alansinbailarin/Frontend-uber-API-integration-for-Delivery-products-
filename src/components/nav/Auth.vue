<template>
  <div>
    <div class="flex items-center justify-between">
      <picture
        @click="toggleDropdown"
        v-if="authUser.avatar"
        class="cursor-pointer"
      >
        <img :src="authUser.avatar" alt="" class="w-12 h-12 rounded-full" />
      </picture>
      <span
        @click="toggleDropdown"
        class="bg-gray-100 cursor-pointer w-12 h-12 p-3 rounded-full font-medium text-gray-500 text-lg"
        v-else
        >{{ initials.getInitials(authUser.name, authUser.last_name) }}</span
      >
    </div>
    <Transition :duration="550" name="nested">
      <Dropdown v-show="isOpen" class="right-4 md:right-10 px-3 py-2 divide-y">
        <ul class="pb-3">
          <li class="text-gray-700 text-sm font-medium">
            {{ authUser.name }} {{ authUser.last_name }}
          </li>
          <li class="text-sm text-gray-500">{{ authUser.email }}</li>
          <li class="text-gray-400 font-thin text-xs mt-2">
            {{ authUser.uuid }}
          </li>
        </ul>
        <div class="py-2">
          <button
            @click="authStore.logout"
            class="text-sm font-medium text-gray-700"
          >
            Sign Out
          </button>
        </div>
      </Dropdown>
    </Transition>
  </div>
</template>
<script setup>
import { useGetInitials } from "@/composables/useGetInitials";
import { useAuthStore } from "@/stores/auth";
import { computed, ref } from "vue";
import Dropdown from "../Dropdown.vue";
import { Axios } from "axios";

const initials = useGetInitials();
const isOpen = ref(false);
const authStore = useAuthStore();

axios.defaults.headers.common["Authorization"] = `Bearer ${authStore.token}`;

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const props = defineProps({
  authUser: {
    type: Object,
    required: true,
  },
});
</script>
<style scoped>
.outer,
.inner {
  background: #eee;
  padding: 30px;
  min-height: 100px;
}

.inner {
  background: #ccc;
}

.nested-enter-active,
.nested-leave-active {
  transition: all 0.25s ease-in-out;
}
/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.15s ease-in-out;
}
/* delay enter of nested element */
.nested-enter-active .inner {
  transition-delay: 0.1s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  /*
  	Hack around a Chrome 96 bug in handling nested opacity transitions.
    This is not needed in other browsers or Chrome 99+ where the bug
    has been fixed.
  */
  opacity: 0;
}
</style>
