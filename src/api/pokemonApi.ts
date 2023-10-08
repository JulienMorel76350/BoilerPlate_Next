import api from "@/utils/axios";
import { AxiosResponse } from "axios";

export const getPokemonFromId = async (id: number): Promise<AxiosResponse> => {
  try {
    const response = await api.get(`/pokemon/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
