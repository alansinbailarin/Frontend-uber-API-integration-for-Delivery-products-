<template>
  <div class="p-4 md:p-10 h-screen w-full">
    <div class="flex gap-4">
      <div>
        <div class="mb-2">
          <h1 class="font-lg font-medium text-gray-800">
            Process verification
          </h1>
        </div>
        <ul>
          <li class="mb-3">
            <StepButton
              @click="toggleTabs(1)"
              class="bg-gray-50 border-2 border-gray-200 text-gray-700"
              :class="{
                'border border-blue-500 text-blue-500 ': openTab === 1,
              }"
              :title="'Package user information'"
              :subtitle="'Enter the information of the person who will receive or send the package'"
            />
          </li>
          <li>
            <StepButton
              @click="toggleTabs(2)"
              class="bg-gray-50 border-2 border-gray-200 text-gray-700"
              :class="{
                'border border-blue-500 text-blue-500 ': openTab === 2,
              }"
              :title="'Documents information'"
              :subtitle="'Enter the documentation necessary to send the package'"
            />
          </li>
        </ul>
      </div>
      <div>
        <ParcelParticipants
          v-if="openTab === 1"
          :class="{ hidden: openTab !== 1, block: openTab === 1 }"
        />
        <ParcelParticipants
          v-if="openTab === 2"
          :class="{ hidden: openTab !== 2, block: openTab === 2 }"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, defineAsyncComponent, watch, onMounted } from "vue";
import { useAuthStore } from "@/stores/auth";

const props = defineProps({
  authUser: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const ParcelParticipants = defineAsyncComponent(() =>
  import("@/components/shipment/ParcelParticipants.vue")
);

const StepButton = defineAsyncComponent(() =>
  import("@/components/StepButton.vue")
);

const authUser = useAuthStore();
const openTab = ref(1);

const toggleTabs = (tab) => {
  openTab.value = tab;
};

const isTabOpen = window.localStorage.getItem("isTabOpen");

if (isTabOpen) {
  openTab.value = JSON.parse(isTabOpen);
}

watch(openTab, (val) => {
  window.localStorage.setItem("isTabOpen", JSON.stringify(val));
});
</script>
