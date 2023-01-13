import React, { useState } from "react";
import styled, { css } from "styled-components";
import usePasswordToggle from "../../../../hook/usePasswordToggle";

const ContainerEl = styled.div`
  position: relative;
  margin: 10px 0px;
`;
const Label = styled.label`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 16px;
  display: flex;
  align-items: center;
  pointer-events: none;
  font-size: 16px;
  ${({ focus }) =>
    focus &&
    css`
      height: fit-content;
      font-size: 15px;
      transform: translate(0, -50%);
      background-color: white;
      padding-left: 4px;
      padding-right: 4px;
      color: #000;
    `}
  transition: all 0.3s ease-in-out;
`;
const InputEl = styled.input`
  height: 48px;
  width: 100%;
  border: 1px solid #c0c0c0;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 16px;
  font-size: 15px;
  :focus {
    outline: none;
    /* border: 2px solid blue; */
  }
`;

function TextField({
  value,
  type,
  name,
  labelName,
  id,
  onChange,
  onBlur,
  onFocus,
}) {
  const [focus, setFocus] = useState(false);
  return (
    <ContainerEl>
      <InputEl
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={(e) => {
          if (e.target.value.length === 0) setFocus(false);
        }}
      />
      <Label focus={focus}>{labelName}</Label>
    </ContainerEl>
  );
}

function PasswordTextField({
  type,
  name,
  labelName,
  id,
  onChange,
  value,
  onBlur,
  onFocus,
}) {
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  const [focus, setFocus] = useState(false);
  return (
    <ContainerEl>
      <InputEl
        type={PasswordInputType}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={(e) => {
          if (e.target.value.length === 0) setFocus(false);
        }}
      />
      {ToggleIcon}
      <Label focus={focus}>{labelName}</Label>
    </ContainerEl>
  );
}

export { TextField, PasswordTextField };
