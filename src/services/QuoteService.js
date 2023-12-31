import axios from "axios";

let api_url = "";
const authDataString = window.localStorage.getItem("auth");
const authData = authDataString ? JSON.parse(authDataString) : null;

if (import.meta.env.VITE_APP_ENV === "local") {
  api_url = import.meta.env.VITE_API_URL_DEV;
} else if (import.meta.env.VITE_APP_ENV === "production") {
  api_url = import.meta.env.VITE_API_URL_PROD;
}

const headers = {
  Accept: "application/json",
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
};

const apiClient = axios.create({
  baseURL: api_url,
  method: "GET",
  withCredentials: false,
  headers,
});

apiClient.interceptors.request.use((config) => {
  const authDataString = window.localStorage.getItem("auth");
  const authData = authDataString ? JSON.parse(authDataString) : null;

  if (authData && authData.authToken) {
    config.headers.Authorization = `Bearer ${authData.authToken}`;
  }

  return config;
});

export default {
  getQuote(customer_uuid, access_token) {
    return apiClient.get(`/quote/${customer_uuid}/${access_token}`);
  },

  createShipment(form) {
    return apiClient.post("api/shipment/create", form);
  },

  updateShipment(id, form) {
    return apiClient.put(`api/shipment/update/${id}`, form);
  },

  getTransactions(uuid) {
    return apiClient.get(`api/transactions/${uuid}`);
  },

  createTransaction(form) {
    return apiClient.post("api/transaction/create", form);
  },
};
