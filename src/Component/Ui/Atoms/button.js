import React from "react";
import ButtonLoader from "./ButtonLoder";
import styled, { css } from "styled-components";

const ButtonContainer = styled.button`
  border-radius: ${({ padding }) => (padding ? "10px " : "50px")};
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 200;
  padding: ${({ padding }) => padding || "15px 50px"};
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
  type,
  padding,
}) {
  return (
    <ButtonContainer
      type={type}
      onClick={onClick}
      bg={bg}
      color={color}
      varient={varient}
      disabled={disabled}
      padding={padding}
    >
      {label}
      {processingIcon && <ButtonLoader />}
    </ButtonContainer>
  );
}
