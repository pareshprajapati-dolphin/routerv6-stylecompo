import React from "react";
import styled, { ThemeProvider } from "styled-components";

const ButtonContainer = styled.div`
  background-color: ${(props) =>
    props.varient === "outline" ? "#FFF" : "blue"};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  margin: 4px 2px;
  border: 2px solid black;
  text-decoration: none;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background: transparent;
  }
`;
const Label = styled.label`
  user-select: none;
  font-size: 15px;
`;

export default function Button({ label, onClick, bg, varient }) {
  return (
    <ButtonContainer onClick={onClick} bg={bg} varient={varient}>
      <Label>{label}</Label>
    </ButtonContainer>
  );
}
