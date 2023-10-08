import Head from "next/head";
import { useState, useEffect, ChangeEvent } from "react";
import { fetchPokemonsByGeneration } from "@/api/pokemonApi";
import styled from "styled-components";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { Pokemon, PokemonSpecies } from "@/types/types";


const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: grey;
  padding: 20px 40px;
  width: 100%;
  max-width: 1020px;
  @media (min-width: 1020px) {
    padding: 20px, 0px;
  }
  select{
    padding:5px;
    border-radius: 12px;
    margin:20px 0px;
  }
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: white;

`;

const CardContainer = styled.div`
  display:flex;
  width:100%;
  flex-wrap:wrap;
  gap:40px;
`

export default function Home() {
   const [generation, setGeneration] = useState<number>(1);
   const [pokemons, setPokemons] = useState<Pokemon[]>([]);

   useEffect(() => {
     const loadPokemons = async () => {
       const fetchedPokemons: PokemonSpecies[] =
         await fetchPokemonsByGeneration(generation);
       const pokemons: Pokemon[] = fetchedPokemons.map((p) => ({
         name: p.name,
         imageUrl: `https://img.pokemondb.net/sprites/home/normal/${p.name}.png`,
       }));
       setPokemons(pokemons);
     };

     loadPokemons();
   }, [generation]);

   const handleGenerationChange = (e: ChangeEvent<HTMLSelectElement>) => {
     setGeneration(Number(e.target.value));
   };

  return (
    <>
      <Head>
        <title>Next BoilerPlate</title>
        <meta name="description" content="Boiler Plate for next Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ScreenContainer>
        <Header></Header>
        <Title>Choisir une génération de pokemon</Title>
        <select value={generation} onChange={handleGenerationChange}>
          <option value={1}>Generation 1</option>
          <option value={2}>Generation 2</option>
          <option value={3}>Generation 3</option>
          <option value={4}>Generation 4</option>
        </select>
        <CardContainer>
          {pokemons.map((pokemon) => (
            <Card key={pokemon.name} pokemon={pokemon} />
          ))}
        </CardContainer>
      </ScreenContainer>
    </>
  );
}
