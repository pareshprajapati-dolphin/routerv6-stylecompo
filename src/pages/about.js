import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../Component/store/AuthProvider";
import Button from "../Component/Ui/Atoms/button";
import useLocalStorage from "../hook/useLocalStorage";

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

  useEffect(() => {
    console.log("_pp test user", localUser);
    if (localUser === undefined) {
      //logout();
      navigation("/login", { replace: true });
    } else {
      // if (typeof user === "object") setUserLogin(user);
      // else if (typeof user === "string") {
      //   let newData = JSON.parse(user);
      //   setUserLogin(newData);
      // }
      // let newData = JSON.parse(user);
      setUserLogin(localUser);
    }
  }, [localUser, navigation]);

  return (
    <>
      <div>
        <h1>This is the About page</h1>
        <h2> user data form the context data and user token </h2>
      </div>
      <div> user name:::{localUser.name}</div>
      <ButtonDiv>
        <Button
          primary="primary"
          label="Logout"
          onClick={() => {
            setLocalUser();
            // localStorage.removeItem("userdata");
            navigation("/login");
          }}
        />
      </ButtonDiv>
    </>
  );
}
