import React from "react";
import styled, { css } from "styled-components";

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
    opacity: 0.9;
    transform: scale(0.98);
  }
  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.disabled};
      cursor: none;
    `};
`;

export default function Button({
  label,
  onClick,
  bg,
  color,
  processingIcon,
  disabled,
}) {
  return (
    <ButtonContainer
      onClick={onClick}
      bg={bg}
      color={color}
      disabled={disabled}
    >
      {label}
      {processingIcon && (
        <svg
          className="animate-spin h-5 w-5 text-white mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
    </ButtonContainer>
  );
}
