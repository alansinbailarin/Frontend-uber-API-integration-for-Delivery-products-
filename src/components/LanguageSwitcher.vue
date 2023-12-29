<template>
  <div class="relative inline-block">
    <button
      type="button"
      class="inline-flex items-center justify-center px-4 py-2 text-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 duration-300 ease-in-out"
      @click="toggleDropdown"
    >
      <span class="text-xl" v-html="currentLocaleImg"></span>
      <span class="ml-2">{{ currentLocale }}</span>
    </button>
    <Transition :duration="550" name="nested">
      <Dropdown v-show="isOpen">
        <ul>
          <li v-for="sLocale in supportedLocales" :key="sLocale">
            <button
              @click="switchLanguage(sLocale)"
              class="hover:bg-gray-100 duration-300 ease-in-out px-4 py-2 w-full text-left flex items-center"
              :class="{
                'bg-gray-100 text-indigo-500': locale === sLocale,
              }"
            >
              <span class="text-xl" v-html="localeImg(sLocale)"></span>
              <span class="ml-2">{{ t(`locale.${sLocale}`) }}</span>
            </button>
          </li>
        </ul>
      </Dropdown>
    </Transition>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { ref, computed } from "vue";
import Tr from "@/i18n/translation";
import { useRouter } from "vue-router";
import Dropdown from "./Dropdown.vue";

const { t, locale } = useI18n();
const supportedLocales = Tr.supportedLocales;
const router = useRouter();
const isOpen = ref(false);

const switchLanguage = async (newLocale) => {
  isOpen.value = false;

  await Tr.switchLanguage(newLocale);

  try {
    await router.replace({ params: { locale: newLocale } });
  } catch (e) {
    console.error(e);
    router.push("/");
  }
};

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const currentLocale = computed(() => {
  return t(`locale.${locale.value}`);
});

const currentLocaleImg = computed(() => {
  if (locale.value === "es") {
    return '<span class="fi fi-mx rounded-sm object-fill"></span>';
  }

  if (locale.value === "en") {
    return '<span class="fi fi-us rounded-sm object-fill"></span>';
  }
  return null;
});

const localeImg = (locale) => {
  if (locale === "es") {
    return '<span class="fi fi-mx rounded-sm object-fill"></span>';
  }

  if (locale === "en") {
    return '<span class="fi fi-us rounded-sm object-fill"></span>';
  }
  return null;
};
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
