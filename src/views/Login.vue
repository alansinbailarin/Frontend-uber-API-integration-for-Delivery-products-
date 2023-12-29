<template>
  <form @submit.prevent="($event) => authStore.login(form)">
    <input type="text" v-model="form.email" placeholder="email" /><input
      type="password"
      v-model="form.password"
      placeholder="password"
    />
    <button type="submit">Login</button>
    <RouterLink :to="{ name: 'register', params: { locale: locale } }"
      >Register</RouterLink
    >
  </form>
</template>
<script setup>
import { useAuthStore } from "@/stores/auth";
import { RouterLink } from "vue-router";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const locale = router.currentRoute.value.params.locale;
const authStore = useAuthStore();
const form = ref({
  email: "",
  password: "",
});
</script>
