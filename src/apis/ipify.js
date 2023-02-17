import axios from "axios";
const KEY = "at_geiyM6iFVWpT7E4hLvymF8riwOLK4";

export default axios.create({
  baseURL: "https://geo.ipify.org/api/v2/country,city,vpn",
  params: {
    apiKey: KEY
  },
});
