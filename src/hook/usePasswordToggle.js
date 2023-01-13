import React, { useState } from "react";
import styled from "styled-components";
import { EyeOpen, EyeClose } from "../Component/Icons/eyeOpen";

const PasswordIcon = styled.div`
  float: right;
  margin-right: 15px;
  margin-top: -40px;
  position: relative;
  cursor: pointer;
`;

export default function usePasswordToggle() {
  const [visible, setVisible] = useState(false);

  const Icon = (
    <PasswordIcon onClick={() => setVisible((visible) => !visible)}>
      {visible ? <EyeOpen /> : <EyeClose />}
    </PasswordIcon>
  );

  const InputType = visible ? "text" : "password";

  return [InputType, Icon];
}
