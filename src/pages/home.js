import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useLocalStorage } from "../hook/useLocalStorage";
import { useCookiesStorage } from "../hook/useCookiesStorage";
import ImageSlider from "../Component/Carousel/Imageslider";
import { SliderData } from "../Component/Carousel/SliderData";
import content from "../Component/Content";
import Card from "../Component/Ui/Atoms/Card";
import { useTranslation } from "react-i18next";
import withAuth from "../Component/Hoc";
import { Content } from "../style/global.css.";
import HeaderText from "../Component/Ui/Atoms/heading/headerText";

export const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
`;
function Home() {
  const navigation = useNavigate();
  const [localUser] = useLocalStorage("userdata");
  const [appToken] = useCookiesStorage("appToken");
  const [user, setUser] = useState({});
  const { t } = useTranslation();

  const releaseDate = new Date("2021-03-07");
  const timeDifference = new Date() - releaseDate;
  const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  useEffect(() => {
    if (!localUser || !appToken) {
      navigation("/login");
    } else {
      setUser(localUser);
    }
  }, [navigation]);

  // const handleClick = () => {
  //   localStorage.setItem("userData", "test123");
  // };

  return (
    <>
      <Content>
        <HeaderText varient="h3">{t("welcome_message")}</HeaderText>
        <p>{t("days_since_release", { number_of_days })}</p>

        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>

        {/* <h2>thie the api token::: {appToken}</h2>
      <StyledLable>login user name: {user.name}</StyledLable>

      <StyledLable>user email Address::: {user.email}</StyledLable> */}

        {/* <button onClick={() => handleClick()}>Click</button> */}
      </Content>
    </>
  );
}

export default Home;
