import React from "react";
import styled from "styled-components";

const ContainerEl = styled.div`
  width: 50%;
  flex-direction: row;
  // position: fixed;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;
const InputEl = styled.input`
  height: auto;
  width: 100%;
  outline: 0;
  font-size: 20px;
  border: 0;
  border-bottom: 2px solid black;
`;

const Label = styled.label`
  width: 100px;
  padding: 3px 5px;
  font-size: 20px;
`;

export default function Input({ type, name, labelName, id, onChange }) {
  return (
    <ContainerEl>
      <Label htmlFor={id}>{labelName}</Label>
      <InputEl name={name} type={type} onChange={onChange} />
    </ContainerEl>
  );
}
