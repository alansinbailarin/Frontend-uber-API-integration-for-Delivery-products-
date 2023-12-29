<template>
  <section>
    <div class="text-center">
      <h1
        class="font-bold text-6xl bg-gradient-to-r from-blue-600 via-indigo-500 to-indigo-400 text-transparent bg-clip-text"
      >
        {{ $t("hero.solutionsTitle") }}
      </h1>
    </div>
    <div
      class="w-full bg-gradient-to-r from-indigo-100 to-indigo-50 bg-opacity-30 p-3 mt-8 rounded-3xl shadow-sm"
    >
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div class="w-full bg-white shadow-sm p-4 rounded-xl">
          <div>
            <h1 class="font-semibold text-xl uppercase text-gray-800">
              {{ $t("hero.payments.title") }}
            </h1>
            <p class="text-gray-600">{{ $t("hero.payments.subtitle") }}</p>
            <p class="text-gray-500 mt-2 font-thin">
              {{ $t("hero.payments.description") }}
            </p>
          </div>
          <div class="mt-4">
            <ul class="space-y-4 font-extralight text-left text-gray-600">
              <li class="flex items-center space-x-3 rtl:space-x-reverse">
                <span class="text-indigo-500 bg-indigo-100 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    fill="currentColor"
                    class="bi bi-currency-dollar"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"
                    />
                  </svg>
                </span>
                <span>{{ $t("hero.payments.list.saveMoney") }}</span>
              </li>
              <li class="flex items-center space-x-3 rtl:space-x-reverse">
                <span class="text-indigo-500 bg-indigo-100 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    fill="currentColor"
                    class="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
                    />
                  </svg>
                </span>
                <span>{{ $t("hero.payments.list.eliminatesFraud") }}</span>
              </li>
              <li class="flex items-center space-x-3 rtl:space-x-reverse">
                <span class="text-indigo-500 bg-indigo-100 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    fill="currentColor"
                    class="bi bi-credit-card"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"
                    />
                    <path
                      d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"
                    />
                  </svg>
                </span>
                <span>{{ $t("hero.payments.list.securePayments") }}</span>
              </li>
            </ul>
          </div>
          <div class="bg-indigo-50 rounded-md">
            <picture>
              <img
                src="../../../public/img/payments.png"
                alt="Payments"
                class="w-48 mx-auto mt-4"
              />
            </picture>
          </div>
        </div>
        <div class="w-full bg-white shadow-sm p-4 rounded-xl">
          <div>
            <h1 class="font-semibold text-xl uppercase text-gray-800">
              {{ $t("hero.identityVerification.title") }}
            </h1>
            <p class="text-gray-600">
              {{ $t("hero.identityVerification.subtitle") }}
            </p>
            <p class="text-gray-500 mt-2 font-thin">
              {{ $t("hero.identityVerification.description") }}
            </p>
          </div>
          <div class="mt-4">
            <ul class="space-y-4 font-extralight text-left text-gray-600">
              <li class="flex items-center space-x-3 rtl:space-x-reverse">
                <span class="text-indigo-500 bg-indigo-100 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    fill="currentColor"
                    class="bi bi-fingerprint"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8.06 6.5a.5.5 0 0 1 .5.5v.776a11.5 11.5 0 0 1-.552 3.519l-1.331 4.14a.5.5 0 0 1-.952-.305l1.33-4.141a10.5 10.5 0 0 0 .504-3.213V7a.5.5 0 0 1 .5-.5Z"
                    />
                    <path
                      d="M6.06 7a2 2 0 1 1 4 0 .5.5 0 1 1-1 0 1 1 0 1 0-2 0v.332c0 .409-.022.816-.066 1.221A.5.5 0 0 1 6 8.447c.04-.37.06-.742.06-1.115zm3.509 1a.5.5 0 0 1 .487.513 11.5 11.5 0 0 1-.587 3.339l-1.266 3.8a.5.5 0 0 1-.949-.317l1.267-3.8a10.5 10.5 0 0 0 .535-3.048A.5.5 0 0 1 9.569 8Zm-3.356 2.115a.5.5 0 0 1 .33.626L5.24 14.939a.5.5 0 1 1-.955-.296l1.303-4.199a.5.5 0 0 1 .625-.329Z"
                    />
                    <path
                      d="M4.759 5.833A3.501 3.501 0 0 1 11.559 7a.5.5 0 0 1-1 0 2.5 2.5 0 0 0-4.857-.833.5.5 0 1 1-.943-.334Zm.3 1.67a.5.5 0 0 1 .449.546 10.72 10.72 0 0 1-.4 2.031l-1.222 4.072a.5.5 0 1 1-.958-.287L4.15 9.793a9.72 9.72 0 0 0 .363-1.842.5.5 0 0 1 .546-.449Zm6 .647a.5.5 0 0 1 .5.5c0 1.28-.213 2.552-.632 3.762l-1.09 3.145a.5.5 0 0 1-.944-.327l1.089-3.145c.382-1.105.578-2.266.578-3.435a.5.5 0 0 1 .5-.5Z"
                    />
                    <path
                      d="M3.902 4.222a4.996 4.996 0 0 1 5.202-2.113.5.5 0 0 1-.208.979 3.996 3.996 0 0 0-4.163 1.69.5.5 0 0 1-.831-.556Zm6.72-.955a.5.5 0 0 1 .705-.052A4.99 4.99 0 0 1 13.059 7v1.5a.5.5 0 1 1-1 0V7a3.99 3.99 0 0 0-1.386-3.028.5.5 0 0 1-.051-.705ZM3.68 5.842a.5.5 0 0 1 .422.568c-.029.192-.044.39-.044.59 0 .71-.1 1.417-.298 2.1l-1.14 3.923a.5.5 0 1 1-.96-.279L2.8 8.821A6.531 6.531 0 0 0 3.058 7c0-.25.019-.496.054-.736a.5.5 0 0 1 .568-.422Zm8.882 3.66a.5.5 0 0 1 .456.54c-.084 1-.298 1.986-.64 2.934l-.744 2.068a.5.5 0 0 1-.941-.338l.745-2.07a10.51 10.51 0 0 0 .584-2.678.5.5 0 0 1 .54-.456Z"
                    />
                    <path
                      d="M4.81 1.37A6.5 6.5 0 0 1 14.56 7a.5.5 0 1 1-1 0 5.5 5.5 0 0 0-8.25-4.765.5.5 0 0 1-.5-.865Zm-.89 1.257a.5.5 0 0 1 .04.706A5.478 5.478 0 0 0 2.56 7a.5.5 0 0 1-1 0c0-1.664.626-3.184 1.655-4.333a.5.5 0 0 1 .706-.04ZM1.915 8.02a.5.5 0 0 1 .346.616l-.779 2.767a.5.5 0 1 1-.962-.27l.778-2.767a.5.5 0 0 1 .617-.346Zm12.15.481a.5.5 0 0 1 .49.51c-.03 1.499-.161 3.025-.727 4.533l-.07.187a.5.5 0 0 1-.936-.351l.07-.187c.506-1.35.634-2.74.663-4.202a.5.5 0 0 1 .51-.49"
                    />
                  </svg>
                </span>
                <span>{{
                  $t("hero.identityVerification.list.verifyIdentity")
                }}</span>
              </li>
              <li class="flex items-center space-x-3 rtl:space-x-reverse">
                <span class="text-indigo-500 bg-indigo-100 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    fill="currentColor"
                    class="bi bi-lock"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"
                    />
                  </svg>
                </span>
                <span>{{
                  $t("hero.identityVerification.list.secureTransactions")
                }}</span>
              </li>
              <li class="flex items-center space-x-3 rtl:space-x-reverse">
                <span class="text-indigo-500 bg-indigo-100 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    fill="currentColor"
                    class="bi bi-shield"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56"
                    />
                  </svg>
                </span>
                <span>{{
                  $t("hero.identityVerification.list.protectsPrivacy")
                }}</span>
              </li>
            </ul>
          </div>
          <div class="bg-indigo-50 rounded-md">
            <picture>
              <img
                src="../../../public/img/identity.png"
                alt="Identity"
                class="w-48 mx-auto mt-4"
              />
            </picture>
          </div>
        </div>
        <div class="w-full bg-white shadow-sm p-4 rounded-xl">
          <div>
            <h1 class="font-semibold text-xl uppercase text-gray-800">
              {{ $t("hero.tracking.title") }}
            </h1>
            <p class="text-gray-600">
              {{ $t("hero.tracking.subtitle") }}
            </p>
            <p class="text-gray-500 mt-2 font-thin">
              {{ $t("hero.tracking.description") }}
            </p>
          </div>
          <div class="mt-4">
            <ul class="space-y-4 font-extralight text-left text-gray-600">
              <li class="flex items-center space-x-3 rtl:space-x-reverse">
                <span class="text-indigo-500 bg-indigo-100 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    fill="currentColor"
                    class="bi bi-pin-map-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"
                    />
                  </svg>
                </span>
                <span>{{ $t("hero.tracking.list.trackPackages") }}</span>
              </li>
              <li class="flex items-center space-x-3 rtl:space-x-reverse">
                <span class="text-indigo-500 bg-indigo-100 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    fill="currentColor"
                    class="bi bi-bell"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6"
                    />
                  </svg>
                </span>
                <span>{{ $t("hero.tracking.list.realTime") }}</span>
              </li>
              <li class="flex items-center space-x-3 rtl:space-x-reverse">
                <span class="text-indigo-500 bg-indigo-100 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    fill="currentColor"
                    class="bi bi-images"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                    <path
                      d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2M14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1M2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10"
                    />
                  </svg>
                </span>
                <span>{{ $t("hero.tracking.list.notifications") }}</span>
              </li>
            </ul>
          </div>
          <div class="bg-indigo-50 rounded-md">
            <picture>
              <img
                src="../../../public/img/tracking.png"
                alt="Identity"
                class="h-48 mx-auto mt-4"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup></script>
