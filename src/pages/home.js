import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useLocalStorage } from "../hook/useLocalStorage";
import { useCookiesStorage } from "../hook/useCookiesStorage";
import ImageSlider from "../Component/Carousel/Imageslider";
import { SliderData } from "../Component/Carousel/SliderData";
import content from "../Component/Content";
import Card from "../Component/Ui/Atoms/Card";

export const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
`;

export default function Home() {
  const navigation = useNavigate();
  const [localUser] = useLocalStorage("userdata");
  const [appToken] = useCookiesStorage("appToken");
  const [user, setUser] = useState({});

  useEffect(() => {
    if (!localUser || !appToken) {
      navigation("/login");
    } else {
      setUser(localUser);
    }
  }, []);

  // const handleClick = () => {
  //   localStorage.setItem("userData", "test123");
  // };

  return (
    <>
      <div style={{ padding: "10px" }}>
        <ImageSlider slides={SliderData} />
      </div>

      <Container>
        {content.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </Container>

      {/* <Footer /> */}

      {/* <h2>thie the api token::: {appToken}</h2>
      <StyledLable>login user name: {user.name}</StyledLable>

      <StyledLable>user email Address::: {user.email}</StyledLable> */}

      {/* <button onClick={() => handleClick()}>Click</button> */}
    </>
  );
}
