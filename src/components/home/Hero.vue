<template>
  <section class="my-8">
    <div class="text-center justify-center">
      <span
        class="bg-white text-xs md:text-base rounded-full border border-gray-200 px-2 py-3"
      >
        <span
          class="bg-indigo-100 px-2 py-1 mr-3 rounded-full text-indigo-600 font-medium"
          >Alpha V1.0</span
        >
        <span>{{ $t("hero.updates") }}</span>
      </span>
      <div class="mt-8 md:mt-16">
        <div>
          <h1 class="text-6xl md:text-8xl font-semibold">
            {{ $t("hero.title") }}
            <span
              class="bg-gradient-to-r from-blue-600 via-indigo-500 to-indigo-400 text-transparent bg-clip-text"
              >{{ $t("hero.afterTitle") }}
              <span class="text-5xl md:text-7xl">✨</span></span
            >
          </h1>
        </div>
        <div class="mt-4 md:mt-8">
          <h2 class="text-xl md:text-3xl text-gray-500">
            {{ $t("hero.subtitle") }}
          </h2>
        </div>
        <div class="mt-7 md:mt-8">
          <RouterLink
            :to="Tr.i18nRoute({ name: 'shipment' })"
            class="bg-black text-white px-6 py-3 text-lg md:text-2xl rounded-md hover:bg-gray-800 transition-colors duration-300 ease-in-out"
            >{{ $t("hero.startNow") }}</RouterLink
          >
        </div>
      </div>
    </div>
    <div
      class="absolute wave inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      aria-hidden="true"
    >
      <div
        class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-700 to-pink-700 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      ></div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
import Tr from "@/i18n/translation";
</script>
