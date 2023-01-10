import React from "react";
import ButtonLoader from "./ButtonLoder";
import styled, { css } from "styled-components";

const ButtonContainer = styled.button`
  font-size: 1em;
  min-width: ${({ minWidth }) => minWidth || "150px"};
  min-height: ${({ minHeight }) => minHeight || "50px"};
  padding: auto;
  border-radius: 30px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#333"};
  &:hover {
    transform: scale(0.98);
  }
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${({ theme }) => theme.colors.disabled};
      pointer-events: none;
    `};

  ${({ active }) =>
    active &&
    css`
      background-color: #3399ff;
    `}
`;

export default function Button({
  label,
  onClick,
  bg,
  varient,
  color,
  processingIcon,
  disabled,
  type,
  minHeight,
  minWidth,
  active,
}) {
  return (
    <ButtonContainer
      type={type}
      onClick={onClick}
      bg={bg}
      color={color}
      varient={varient}
      disabled={disabled}
      minWidth={minWidth}
      minHeight={minHeight}
      active={active}
    >
      {label}
      {processingIcon && <ButtonLoader />}
    </ButtonContainer>
  );
}
