import axios from "axios";

const api = axios.create({
  baseURL: "https://the-one-api.dev/v2",
});

api.interceptors.request.use(async (config) => {
  const token = "dY4hEDSmsWWWWavr6nUl";

  config.headers.authorization = `Bearer ${token}`;

  return config;
});

export default api;
