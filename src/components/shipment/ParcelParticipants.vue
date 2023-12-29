<template>
  <div>
    <form @submit.prevent="saveParcel()">
      <div class="mb-2">
        <h1 class="font-lg font-medium text-gray-800">
          Select your participant type
        </h1>
      </div>

      <div class="grid grid-cols-2 gap-4 w-full">
        <div class="flex items-center">
          <input
            id="sender-radio"
            type="radio"
            value="sender"
            class="hidden peer"
            v-model="form.type"
            checked
          />
          <label
            for="sender-radio"
            class="text-gray-800 p-4 border-2 cursor-pointer peer-checked:border-indigo-400 peer-checked:text-indigo-500 border-gray-200 rounded-lg"
          >
            <div class="block">
              <div class="w-full text-normal font-medium">Sender</div>
              <div class="w-full">
                If you intend to send this package, please ensure that this
                option is selected
              </div>
            </div>
          </label>
        </div>

        <div class="flex items-center">
          <input
            id="recipient-radio"
            type="radio"
            value="recipient"
            class="hidden peer"
            v-model="form.type"
          />
          <label
            for="recipient-radio"
            class="text-gray-800 p-4 border-2 cursor-pointer peer-checked:border-indigo-400 peer-checked:text-indigo-500 border-gray-200 rounded-lg"
          >
            <div class="block">
              <div class="w-full text-normal font-medium">Recipient</div>
              <div class="w-full">
                If you are going to receive this package, please ensure to check
                this option
              </div>
            </div>
          </label>
        </div>
      </div>

      <div class="grid grid-cols-5 my-5 gap-4">
        <div class="col-span-2">
          <label class="text-gray-800 font-medium" for="full-name"
            >Full name</label
          >
          <input
            id="full-name"
            type="text"
            placeholder="John Doe"
            class="bg-gray-50 w-full mt-1 focus:border-indigo-300 rounded-md px-3 py-2 text-gray-800 border border-gray-200"
            :class="{
              'bg-red-50 border-red-200 placeholder:text-red-300':
                errors && errors.full_name,
              'placeholder:text-gray-300': !errors || !errors.full_name,
            }"
            v-model="form.full_name"
          />
        </div>
        <div class="col-span-2">
          <label class="text-gray-800 font-medium mb-1" for="email"
            >Email</label
          >
          <input
            id="email"
            type="email"
            placeholder="example@example.com"
            class="bg-gray-50 w-full mt-1 focus:border-indigo-300 rounded-md px-3 py-2 text-gray-800 border border-gray-200"
            :class="{
              'bg-red-50 border-red-200 placeholder:text-red-300':
                errors && errors.email,
              'placeholder:text-gray-300': !errors || !errors.email,
            }"
            v-model="form.email"
          />
        </div>
        <div class="col-span-1">
          <label class="text-gray-800 font-medium mb-1" for="date-of-birth"
            >Date of birth</label
          >
          <input
            id="date-of-birth"
            type="date"
            class="bg-gray-50 w-full mt-1 focus:border-indigo-300 rounded-md px-3 py-2 text-gray-800 border border-gray-200"
            :class="{
              'bg-red-50 border-red-200 placeholder:text-red-300':
                errors && errors.date_of_birth,
              'placeholder:text-gray-300': !errors || !errors.date_of_birth,
            }"
            v-model="form.date_of_birth"
          />
        </div>
      </div>
      <div class="grid grid-cols-3 gap-4 my-5">
        <div class="col-span-2">
          <label class="text-gray-800 font-medium mb-1" for="address"
            >Address</label
          >
          <input
            id="address"
            type="text"
            placeholder="1234 Main St"
            class="bg-gray-50 w-full mt-1 focus:border-indigo-300 rounded-md px-3 py-2 text-gray-800 border border-gray-200"
            :class="{
              'bg-red-50 border-red-200 placeholder:text-red-300':
                errors && errors.address,
              'placeholder:text-gray-300': !errors || !errors.address,
            }"
            v-model="form.address"
          />
        </div>
        <div class="col-span-1">
          <label class="text-gray-800 font-medium" for="phone-number"
            >Phone number</label
          >
          <input
            id="phone-number"
            type="tel"
            placeholder="+1 555 555 5555"
            class="bg-gray-50 w-full mt-1 focus:border-indigo-300 rounded-md px-3 py-2 text-gray-800 border border-gray-200"
            :class="{
              'bg-red-50 border-red-200 placeholder:text-red-300':
                errors && errors.phone_number,
              'placeholder:text-gray-300': !errors || !errors.phone_number,
            }"
            v-model="form.phone_number"
          />
        </div>
      </div>
      <div class="mt-5">
        <button
          class="inline-flex items-center bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-all ease-in-out px-4 py-2 font-medium"
          :class="{ 'cursor-not-allowed opacity-50': buttonLoading }"
        >
          <svg
            v-if="buttonLoading"
            aria-hidden="true"
            role="status"
            class="inline w-4 h-4 me-3 text-white animate-spin"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
          Save information
        </button>
        <Transition>
          <span
            v-show="savedMessage"
            class="text-sm text-gray-500 ml-2"
            key="savedMessage"
            >{{ savedMessage }}</span
          >
        </Transition>
      </div>
    </form>
  </div>
</template>
<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { useAuthStore } from "@/stores/auth";
import QuoteService from "@/services/QuoteService";

const authUser = useAuthStore();
const selectedType = ref("sender");
const buttonLoading = ref(false);
const parcelParticipantsId = ref(0);
const errors = ref(null);
const savedMessage = ref("");

const authUserInfo = computed(() => {
  return authUser.authUser;
});

const parcelFullName = computed(() => {
  if (
    authUserInfo.value.name !== null &&
    authUserInfo.value.last_name !== null
  ) {
    return `${authUserInfo.value.name} ${authUserInfo.value.last_name}`;
  }
});

const parcelDOB = computed(() => {
  return authUserInfo.value.date_of_birth;
});

const parcelId = computed(() => {
  return authUserInfo.value.id;
});

const parcelEmail = computed(() => {
  return authUserInfo.value.email;
});

const parcelPhone = computed(() => {
  return authUserInfo.value.phone;
});

const form = ref({
  type: selectedType.value,
  full_name:
    authUser.authUser.name !== null && authUser.authUser.last_name !== null
      ? parcelFullName.value
      : "",
  date_of_birth:
    authUser.authUser.date_of_birth !== null ? parcelDOB.value : "",
  address: "",
  email: authUser.authUser.email !== null ? parcelEmail.value : "",
  phone_number: authUser.authUser.phone !== null ? parcelPhone.value : "",
  parcel_id: authUser.authUser.id !== null ? parcelId.value : 0,
});

onMounted(() => {
  watch(
    authUserInfo,
    () => {
      form.full_name = parcelFullName.value;
      form.date_of_birth = parcelDOB.value;
      form.email = parcelEmail.value;
      form.phone_number = parcelPhone.value;
      form.parcel_id = parcelId.value;
    },
    { deep: true }
  );

  const parcelForm = window.localStorage.getItem("formParcel");

  if (parcelForm) {
    form.value = JSON.parse(parcelForm);
  }

  const checkParcelParticipantsId = window.localStorage.getItem(
    "parcelParticipantsId"
  );

  if (checkParcelParticipantsId) {
    parcelParticipantsId.value = JSON.parse(checkParcelParticipantsId);
  }

  watch(
    () => JSON.stringify(form.value),
    (val) => {
      window.localStorage.setItem("formParcel", val);
    },
    { deep: true }
  );
});

const saveParcel = async () => {
  buttonLoading.value = true;
  try {
    errors.value = null;
    if (parcelParticipantsId.value) {
      const participantId = localStorage.getItem("parcelParticipantsId");
      const response = await QuoteService.updateShipment(
        participantId,
        form.value
      );

      savedMessage.value = "Updated";

      console.log(response);
    } else {
      const response = await QuoteService.createShipment(form.value);

      parcelParticipantsId.value = response.data.data.id;
      savedMessage.value = "Saved";

      window.localStorage.setItem(
        "parcelParticipantsId",
        parcelParticipantsId.value
      );

      console.log(response);
    }
  } catch (error) {
    console.log(error);
    if (error.response.status === 422) {
      errors.value = error.response.data.errors;
    }
  } finally {
    buttonLoading.value = false;
  }

  setTimeout(() => {
    savedMessage.value = "";
  }, 3000);
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
