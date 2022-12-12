import React from "react";
import styled from "styled-components";
import PasswordToggle from "../../../hook/usePasswordToggle";

const ContainerEl = styled.div`
  width: 100%;
  flex-direction: row;

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
  padding: 5px 0px;
  border: 0;
  border-bottom: 2px solid black;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: "white";
    -webkit-transition-delay: 9999s;
  }
`;

const Label = styled.label`
  width: 100px;
  font-size: 20px;
`;

function Input({ type, name, labelName, id, onChange, value }) {
  return (
    <ContainerEl>
      <Label htmlFor={id}>{labelName}</Label>
      <InputEl name={name} type={type} onChange={onChange} value={value} />
    </ContainerEl>
  );
}

function PasswordInput({ type, name, labelName, id, onChange, value }) {
  const [PasswordInputType, ToggleIcon] = PasswordToggle();
  return (
    <ContainerEl>
      <Label htmlFor={id}>{labelName}</Label>
      <InputEl
        name={name}
        type={PasswordInputType}
        onChange={onChange}
        value={value}
      />
      {/* {ToggleIcon} */}
    </ContainerEl>
  );
}

export { Input, PasswordInput };
