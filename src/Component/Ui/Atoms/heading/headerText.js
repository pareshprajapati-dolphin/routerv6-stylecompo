import React from "react";
import styled from "styled-components";
import HeaderVarint from "./varient";

const HeaderStyle = styled.h1`
  /* font-size: 40px; */
  ${({ varient }) => HeaderVarint[varient]}
  font-size: ${({ fontSize }) => fontSize};
  text-transform: none;
`;

export default function HeaderText({ as, varient, children, fontSize }) {
  return (
    <HeaderStyle
      as={as || varient}
      varient={varient || "p"}
      fontSize={fontSize}
    >
      {children}
    </HeaderStyle>
  );
}
