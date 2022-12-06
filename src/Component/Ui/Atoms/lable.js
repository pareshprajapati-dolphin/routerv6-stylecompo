import React from "react";
import styled from "styled-components";

const LabelTag = styled.label`
  width: 100px;
  padding: 3px 5px;
  font-size: 20px;
`;

export default function Label({ labelName }) {
  return <LabelTag>{labelName}</LabelTag>;
}
