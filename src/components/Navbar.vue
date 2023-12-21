<template>
  <nav class="p-4 md:px-10 md:py-4 bg-white shadow-sm">
    <div class="flex items-center justify-between">
      <div>
        <picture>
          <img src="../../img/icon.png" alt="" class="md:w-14 w-12" />
        </picture>
      </div>
      <div>
        <ul>
          <li>
            <RouterLink :to="Tr.i18nRoute({ name: 'home' })">{{
              $t("navbar.home")
            }}</RouterLink>
          </li>
        </ul>
      </div>
      <div class="flex items-center gap-4">
        <LanguageSwitcher />
        <Auth />
      </div>
    </div>
  </nav>
</template>
<script setup>
import LanguageSwitcher from "./LanguageSwitcher.vue";
import Auth from "@/components/nav/Auth.vue";
import Tr from "@/i18n/translation";
import { RouterLink } from "vue-router";
</script>
