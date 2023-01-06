import React from "react";
import styled from "styled-components";

const StyledCheckbox = styled.input`
  cursor: pointer;
  width: 16px;
  height: 16px;
  gap: 5px;
  &:checked {
    background-color: #ff0000;
  }
  border-radius: 3px;
  transition: all 150ms;
`;

export default function CheckBox({
  labelName,
  id,
  name,
  value,
  type,
  onChange,
}) {
  return (
    <>
      <label htmlFor={id}>
        <StyledCheckbox
          id={id}
          name={name}
          type={type}
          onChange={onChange}
          checked={value}
        />
        {labelName}
      </label>
    </>
  );
}
