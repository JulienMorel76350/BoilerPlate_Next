import React from "react";
import { styled } from "styled-components";
import { Pokemon } from "@/types/types";

const Wrapping = styled.div`
  display: flex;
  flex: 1;
`;
const Item = styled.div`
  display: flex;
  border-radius: 8px;
  background-color: #fff;
  padding: 20px;
  flex-direction: column;
`;
const ItemTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
`;
const ItemPictureContainer = styled.div`
  display: flex;
  border-radius:50%;
`;
const ItemPicture = styled.img`
  width: 100%;
`;

interface CardProps {
  pokemon: Pokemon;
}

export const Card: React.FC<CardProps> = ({ pokemon }) => {
  return (
    <Wrapping>
      <Item>
        <ItemTitle>{pokemon.name}</ItemTitle>
        <ItemPictureContainer>
          <ItemPicture src={pokemon.imageUrl} alt={pokemon.name} />
        </ItemPictureContainer>
      </Item>
    </Wrapping>
  );
};