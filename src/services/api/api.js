import axios from "axios";

export const api = new axios.create({
  baseURL: "https://api-blogbackend.onrender.com",
});
