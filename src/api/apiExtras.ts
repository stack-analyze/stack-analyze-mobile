import axios from "axios";

export const webToolsApi = axios.create({
  baseURL: "https://api-scraping.vercel.app/api",
});
