import axios from "axios";
import type { Product } from "../types/product.type";


const API_URL ="https://699cb55a83e60a406a4440c7.mockapi.io/api/v1/Productos";

export const getProducts = async (): Promise<Product[]> => {
  const { data } = await axios.get<Product[]>(API_URL);
  return data;
};