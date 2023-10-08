export interface PokemonResponse {
}

export interface Pokemon {
  name: string;
  picture: string;
  type: string; 
}

export interface responsePokemon<T> {
  data: T;
}
