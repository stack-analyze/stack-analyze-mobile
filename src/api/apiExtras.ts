import axios from "axios";

const webToolsApi = axios.create({
  baseURL: "https://api-scraping.vercel.app/api",
});

export default webToolsApi;

