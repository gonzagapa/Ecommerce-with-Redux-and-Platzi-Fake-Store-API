import axios from "axios";

export const ecommerceApi = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1',
});