import axios from "axios";

const KEY = "AIzaSyCUvq6Oammlu69tgwaLIErO6Kpo13C4Un8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 6,
    key: KEY,
  },
});
