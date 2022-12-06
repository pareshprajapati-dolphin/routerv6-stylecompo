import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  margin: 4px 2px;
  border: 2px solid black;
  text-decoration: none;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background: ${(props) => (props.primary ? "white" : "palevioletred")};
    color: black;
  }
`;
// const Label = styled.label`
//   user-select: none;
//   font-size: 15px;
// `;

export default function Button({ label, onClick, bg, varient, primary }) {
  return (
    <ButtonContainer onClick={onClick} primary={primary} varient={varient}>
      {label}
    </ButtonContainer>
  );
}
