import AppServices from "../services";

const appsServiceClient = new AppServices({
  baseUrl: import.meta.env.VITE_PUBLIC_BACKEND_URL!,
  maxRetries: 0,
});

export { appsServiceClient };
