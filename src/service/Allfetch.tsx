import axios from "axios";
import { QueryFunctionContext } from "@tanstack/react-query";

export const fetchProduct = async () => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Product:", error);
    throw new Error("Failed to fetch Product. Please try again later.");
  }
};

export const fetchSoloProduct = async ({
  queryKey,
}: QueryFunctionContext<[string, string | undefined]>) => {
  const result = await axios.get(
    `https://fakestoreapi.com/products/${queryKey[1]}`
  );
  return result.data;
};

export const fetchCategories = async () => {
  try {
    const result = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    return result.data;
  } catch (error) {
    console.error("Error fetching Categories:", error);
    throw new Error("Failed to fetch Categories. Please try again later.");
  }
};
