import Head from "next/head";
import { getPokemonFromId } from "@/api/pokemonApi";
import styled from "styled-components";
import { Card } from "@/components/Card";

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
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: white;
`;

export default function Home() {
  const callApi = getPokemonFromId(35);
  return (
    <>
      <Head>
        <title>Next BoilerPlate</title>
        <meta name="description" content="Boiler Plate for next Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ScreenContainer>
        <Title>Next BoilerPlate 🚧</Title>
        {Object.entries(callApi).map((element) => {
          console.log(element)
        })}
        <Card Cards={}></Card>
      </ScreenContainer>
    </>
  );
}
