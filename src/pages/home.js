import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import { useAuth } from "../Component/store/AuthProvider";
// import CheckBox from "../Component/Ui/Atoms/checkBox";
import { useLocalStorage } from "../hook/useLocalStorage";
import { useCookiesStorage } from "../hook/useCookiesStorage";
// import useAuthContext from "../hook/ useAuthContext";

const StyledLable = styled.p`
  font-size: "larger";
  padding: 2px 0px;
`;

export default function Home() {
  // const { user, userToken, logout } = useAuth();
  const navigation = useNavigate();
  const [localUser, setLocalUser] = useLocalStorage("userdata");
  const [appToken, setAppToken] = useCookiesStorage("appToken");
  const [user, setUser] = useState({});

  useEffect(() => {
    if (!localUser || !appToken) {
      navigation("/login");
    } else setUser(localUser);
  }, [appToken, localUser, navigation]);

  // const handleClick = () => {
  //   localStorage.setItem("userData", "test123");
  // };
  return (
    <div>
      <h1>This is the home page </h1>
      <h2>thie the api token::: {appToken}</h2>
      <StyledLable>login user name: {user.name}</StyledLable>

      <StyledLable>user email Address::: {user.email}</StyledLable>

      {/* <button onClick={() => handleClick()}>Click</button> */}
    </div>
  );
}
