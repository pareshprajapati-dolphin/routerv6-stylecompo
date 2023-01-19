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
import { decodeLocalData } from "../Component/Util";

export const Container = styled.div`
  /* width: 1000px; */
  padding: 0 10px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    flex-direction: column;
    padding: 0px;
  }
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
    let userData = decodeLocalData();
    console.log("_pp test userData::: ", userData);

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
