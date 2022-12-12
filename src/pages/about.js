import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import { useAuth } from "../Component/store/AuthProvider";
import Button from "../Component/Ui/Atoms/button";
import useLocalStorage from "../hook/useLocalStorage";
import { useCookiesStorage } from "../hook/useCookiesStorage";

const ButtonDiv = styled.div`
  width: 30%;
  display: flex;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
`;

export default function About() {
  // const { userToken, user, logout } = useAuth();
  const navigation = useNavigate();
  const [userLogin, setUserLogin] = useState({});

  const [localUser, setLocalUser] = useLocalStorage("userdata");
  const [appToken, setAppToken] = useCookiesStorage("appToken");

  useEffect(() => {
    console.log("_pp test user", !localUser);
    if (!localUser || !appToken) {
      navigation("/login", { replace: true });
    } else setUserLogin(localUser);
  }, [appToken, localUser, navigation]);

  return (
    <>
      <div style={{ padding: "10px 0px" }}>
        <h1>This is the About page</h1>
        <h2> user data form the context data and user token {appToken}</h2>

        <div> user name:::{userLogin.name}</div>
        <ButtonDiv>
          <Button
            bg="#ff0099"
            color="#000"
            label="Logout"
            onClick={() => {
              setLocalUser();
              setAppToken();
              navigation("/login");
            }}
          />
        </ButtonDiv>
      </div>
    </>
  );
}
