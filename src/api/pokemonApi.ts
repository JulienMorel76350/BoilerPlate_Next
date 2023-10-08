// pokemonService.ts
import api from "@/utils/axios";
import { GenerationData, PokemonSpecies } from "@/types/types";

export const fetchPokemonsByGeneration = async (
  generation: number
): Promise<PokemonSpecies[]> => {
  try {
    const response = await api.get<GenerationData>(`/generation/${generation}`);
    return response.data.pokemon_species;
  } catch (error) {
    console.error("An error occurred while fetching the data.", error);
    return [];
  }
};
