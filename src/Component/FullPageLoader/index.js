import React from "react";
import styled from "styled-components";
import Spinner from "../Icons/greyLogo";
import { SimpleLoadingIcon } from "../Icons/testingLogo.svg";

const StyleLoader = styled.div`
  position: absolute;
  top: 50px;
  left: 30rem;
  z-index: 50;
  align-items: center;
  justify-content: center;
  opacity: 50;
`;

export default function FullPageLoader() {
  return (
    <StyleLoader>
      <img src={SimpleLoadingIcon} alt="loading" />
    </StyleLoader>
  );
}
