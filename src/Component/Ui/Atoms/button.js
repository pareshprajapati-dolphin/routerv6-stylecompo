import React from "react";
import styled, { css } from "styled-components";
import Spinner from "../../Icons/Spinner";

const ButtonContainer = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
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
`;

export default function Button({
  label,
  onClick,
  bg,
  varient,
  color,
  processingIcon,
  disabled,
}) {
  return (
    <ButtonContainer
      onClick={onClick}
      bg={bg}
      color={color}
      varient={varient}
      disabled={disabled}
    >
      {label}
      {processingIcon && <Spinner />}
    </ButtonContainer>
  );
}
