<template>
  <section>
    <div class="text-center">
      <h1 class="font-bold text-6xl text-indigo-600">
        {{ $t("hero.solutionsTitle") }}
      </h1>
    </div>
    <div
      class="w-full bg-gradient-to-r from-indigo-100 to-indigo-50 bg-opacity-30 p-3 mt-8 rounded-3xl shadow-sm"
    >
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="w-full bg-white shadow-sm p-4 rounded-xl">
          <div>
            <h1 class="font-semibold text-xl uppercase text-gray-800">
              Pagos seguros
            </h1>
            <p class="text-gray-600">Transacciones aseguradas</p>
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
                <span>Tu dinero está a salvo hasta que recibas tu compra</span>
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
                <span
                  >Eliminamos cualquier posibilidad de fraude en tus
                  transacciones</span
                >
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
                <span>Pagos seguros para compradores y vendedores</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full bg-white shadow-sm p-4 rounded-xl">
          <div>
            <h1 class="font-semibold text-xl uppercase text-gray-800">
              Pagos seguros
            </h1>
            <p class="text-gray-600">Transacciones aseguradas</p>
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
                <span>Tu dinero está a salvo hasta que recibas tu compra</span>
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
                <span
                  >Eliminamos cualquier posibilidad de fraude en tus
                  transacciones</span
                >
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
                <span>Pagos seguros para compradores y vendedores</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full bg-white shadow-sm p-4 rounded-xl">
          <div>
            <h1 class="font-semibold text-xl uppercase text-gray-800">
              Pagos seguros
            </h1>
            <p class="text-gray-600">Transacciones aseguradas</p>
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
                <span>Tu dinero está a salvo hasta que recibas tu compra</span>
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
                <span
                  >Eliminamos cualquier posibilidad de fraude en tus
                  transacciones</span
                >
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
                <span>Pagos seguros para compradores y vendedores</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup></script>
