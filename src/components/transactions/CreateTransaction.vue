<template>
  <Loader v-if="loading" />
  <div v-else class="w-full text-center">
    <div class="mx-4 md:mx-36">
      <h1 class="font-semibold text-5xl text-gray-800 mb-4">
        Create your own transaction
      </h1>
      <p class="text-lg font-thin text-gray-600">
        There is a product that you want to buy or sell, but you are not
        confident 100% of online sales? create your first transaction, which
        will allow you to monitor your products in real time, and if a problem
        occurs problem, solve it in minutes
      </p>
      <div class="mt-6">
        <form autoclomplete="off">
          <label class="text-gray-800 font-medium" for="title"
            >Give a title</label
          >
          <InputText placeholder="Buy a barbie" id="title" />
          <Button class="">Start creating your transaction</Button>
        </form>
      </div>
      <div class="mt-6">
        <h1 v-if="transactions.length > 0" class="font-medium text-gray-800">
          Open transactions:
          <template v-for="(transaction, index) in transactions">
            <RouterLink
              class="text-indigo-600 font-normal"
              :to="
                Tr.i18nRoute({
                  name: 'shipment',
                  params: { transaction_code: transaction.transaction_code },
                })
              "
              >{{ transaction.title }}</RouterLink
            >
            <span v-if="index < transactions.length - 1">,</span>
          </template>
        </h1>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useAuthStore } from "@/stores/auth";
import { ref, onMounted, defineAsyncComponent } from "vue";
import QuoteService from "@/services/QuoteService";
import Tr from "@/i18n/translation";
import { RouterLink } from "vue-router";

const InputText = defineAsyncComponent(() =>
  import("@/components/InputText.vue")
);
const Button = defineAsyncComponent(() => import("@/components/Button.vue"));
const Loader = defineAsyncComponent(() => import("@/components/Loader.vue"));

const authUser = useAuthStore();
const userUuid = authUser.authUser.uuid;
const transactions = ref([]);
const loading = ref(false);

onMounted(async () => {
  loading.value = true;
  try {
    const response = await QuoteService.getTransactions(userUuid);
    transactions.value = response.data.data;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
});
</script>
