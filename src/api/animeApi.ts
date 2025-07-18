import axios from "axios";

const animeApi = axios.create({
  baseURL: "https://api.jikan.moe/v4",
});

export default animeApi;
