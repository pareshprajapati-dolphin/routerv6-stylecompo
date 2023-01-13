import React from "react";
import styled from "styled-components";
import PasswordToggle from "../../../hook/usePasswordToggle";

const ContainerEl = styled.div`
  width: 100%;
  position: relative;
  font-weight: 500;
  margin: 10px 0px;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;
const InputEl = styled.input`
  width: 100%;
  padding: 4px 5px;
  height: 40px;
  font-size: 20px;
  font-weight: 400;
  border: 2px solid #d7cfcf;
  &:focus {
    box-shadow: none;
    outline: none;
    border: 2px solid #1976d2;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:active,
  &:-webkit-autofill:focus {
    background-color: transparent !important;
    -webkit-box-shadow: 0 0 0 50px white inset;
  }
`;

const Label = styled.label`
  position: absolute;
  top: -15px;
  left: 10px;
  background-color: #fff;
  padding: 5px 10px;
  font-size: 15px;
`;

function Input({
  type,
  name,
  labelName,
  id,
  onChange,
  value,
  onBlur,
  onFocus,
}) {
  return (
    <ContainerEl>
      <Label htmlFor={id}>{labelName}</Label>
      <InputEl
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
    </ContainerEl>
  );
}

function PasswordInput({
  type,
  name,
  labelName,
  id,
  onChange,
  value,
  onBlur,
  onFocus,
}) {
  const [PasswordInputType, ToggleIcon] = PasswordToggle();
  return (
    <ContainerEl>
      <Label htmlFor={id}>{labelName}</Label>
      <InputEl
        name={name}
        type={PasswordInputType}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      {ToggleIcon}
    </ContainerEl>
  );
}

export { Input, PasswordInput };
