import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  font-size:24px;
  font-weight:18px;
  font-weight:700;
`;

export const Header = () => {
  return (
    <>
      <Container>
        <Title>Pokedex</Title>
      </Container>
    </>
  );
};
