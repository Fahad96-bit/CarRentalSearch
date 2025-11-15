import axios from "axios"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
const API_KEY = import.meta.env.VITE_API_KEY
const CLIENT_KEY = import.meta.env.VITE_CLIENT_KEY

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "apikey": API_KEY,
    "clientkey": CLIENT_KEY,
  },
})

export default apiClient

