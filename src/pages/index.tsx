import Head from "next/head";

import styled from "styled-components";

const ScreenContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: grey;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: white;
`;

export default function Home() {
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
      </ScreenContainer>
    </>
  );
}
