import axios from "axios";
import { apiUrl } from "../api/index";
export const getProducts = async () => {
  try {
    const response = await axios.get(`${apiUrl}?limit=194`);
    return response.data.products;
  } catch (error) {
    console.error(error);
  }
};

export const getProductsByCategory = async (category: string) => {
  try {
    const response = await axios.get(`${apiUrl}/category/${category}`);
    return response.data.products;
  } catch (error) {
    console.error(`Error fetching category ${category}:`, error);
    return [];
  }
};

export const getProductId = async (id: any) => {
  try {
    const response = await axios.get(`${apiUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
