import axios from "axios";


export const client = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    Accept: "application/vnd.axelerate.v1+json",
    "X-Platform": "",
    "Content-Type": "application/json",
  },
});

/* client.interceptors.request.use(
  (config: any) => {
    const token = cookies.get("token");
    if (token) {
      config.headers.authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
); */