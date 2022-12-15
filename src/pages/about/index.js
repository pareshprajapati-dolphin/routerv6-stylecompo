import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import { useAuth } from "../Component/store/AuthProvider";
import Button from "../../Component/Ui/Atoms/button";
import useLocalStorage from "../../hook/useLocalStorage";
import { useCookiesStorage } from "../../hook/useCookiesStorage";

const ButtonDiv = styled.div`
  width: 30%;
  display: flex;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
`;

const Wrapper = styled.section`
  padding: 5rem 0;
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    color: black;
  }
  .hero-heading {
    text-transform: uppercase;
  }
  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }
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
      <Wrapper>
        <div className="container">
          <div className="section-hero-data">
            <p className="hero-top-data">THIS IS ME</p>
            <h1 className="hero-heading">User Name ::-- {userLogin.name}</h1>
            <p className="hero-para">
              I'm {userLogin.name}. A Full stack Developer, youtuber and
              freelancer. A Full stack Developer, youtuber and freelancer.
            </p>
            {/* <Button className="btn hireme-btn">
              <NavLink to="/contact"> hire me </NavLink>
            </Button> */}
          </div>
          {/* <Button
            bg="#ff0099"
            color="#000"
            label="Logout"
            onClick={() => {
              setLocalUser();
              setAppToken();
              navigation("/login");
            }}
          /> */}
        </div>
      </Wrapper>

      {/* <div style={{ padding: "10px 0px" }}>
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
      </div> */}
    </>
  );
}
