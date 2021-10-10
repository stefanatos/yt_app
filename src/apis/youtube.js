import axios from "axios";
const KEY = "AIzaSyCtk-08YPAqHc6DUbZwh9qAusOm0XEwMs8";

const BASE_URL = "https://www.googleapis.com/youtube/v3";

export default axios.create({
  baseURL: BASE_URL,
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
