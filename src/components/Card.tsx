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
  height: 200px;
  width: 400px;
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
  Cards: Pokemon;
}
export const Card: React.FC<CardProps> = ({ Cards }: CardProps) => {
  return (
    <Wrapping>
      <Item>
        <ItemPictureContainer>
          <ItemPicture src=""></ItemPicture>
        </ItemPictureContainer>
        <ItemTitle>{Cards.name}</ItemTitle>
      </Item>
    </Wrapping>
  );
};
