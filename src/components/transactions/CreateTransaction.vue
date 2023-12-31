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
        <form autoclomplete="off" @submit.prevent="createTransaction()">
          <label class="text-gray-800 font-medium text-lg" for="title"
            >Give a title</label
          >
          <input
            v-model="form.title"
            placeholder="Buy a barbie"
            id="title"
            type="text"
            class="bg-gray-50 w-full mt-1 placeholder:text-gray-300 focus:border-indigo-300 rounded-md px-3 py-2 text-gray-800 border border-gray-200"
          />
          <Button
            :type="'submit'"
            :class="{
              'bg-indigo-200 hover:bg-indigo-200 cursor-not-allowed':
                !validateForm(),
            }"
            :disabled="!validateForm()"
          >
            Start creating your transaction
          </Button>
        </form>
      </div>
      <div class="mt-6">
        <h1
          v-if="transactions.length > 0"
          class="font-medium text-lg text-gray-800 flex-wrap flex"
        >
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
import { RouterLink, useRouter } from "vue-router";

const InputText = defineAsyncComponent(() =>
  import("@/components/InputText.vue")
);
const Button = defineAsyncComponent(() => import("@/components/Button.vue"));
const Loader = defineAsyncComponent(() => import("@/components/Loader.vue"));

const authUser = useAuthStore();
const userUuid = authUser.authUser.uuid;
const transactions = ref([]);
const loading = ref(false);

const form = ref({
  title: "",
  user_id: authUser.authUser.id,
});

console.log(authUser.authUser.id);

const validateForm = () => {
  return form.value.title.length > 0;
};

console.log(form.value.title.length);

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

const createTransaction = async () => {
  loading.value = true;
  try {
    const response = await QuoteService.createTransaction(form.value);
    transactions.value.push(response.data.data);
    console.log(response);
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};
</script>
