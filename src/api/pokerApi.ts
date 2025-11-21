import axios from 'axios'

const pokerApi = axios.create({
  baseURL: "https://bicyclecards.com/how-to-play/"
});

export default pokerApi
