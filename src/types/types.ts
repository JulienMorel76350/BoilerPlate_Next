export interface PokemonSpecies {
  name: string;
  url: string;
}

export interface Pokemon {
  name: string;
  imageUrl: string;
}

export interface GenerationData {
  pokemon_species: PokemonSpecies[];
}