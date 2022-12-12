import React, { useState } from "react";
import styled from "styled-components";

const PasswordIcon = styled.div`
  position: absolute;
  width: 10%;
`;

export default function usePasswordToggle() {
  const [visible, setVisible] = useState(false);

  const Icon = (
    <PasswordIcon onClick={() => setVisible((visible) => !visible)}>
      {visible ? (
        <img src="/../images/hide.png" alt="..." />
      ) : (
        <img src="/../images/eye.png" alt="..." />
      )}
    </PasswordIcon>
  );

  const InputType = visible ? "text" : "password";

  return [InputType, Icon];
}
