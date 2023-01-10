import React from "react";

import { Container } from "../../Ui/Atoms/Container/ContainerStyled";
import HeaderText from "../../Ui/Atoms/heading/headerText";
import { Flex, SocialDiv, StyledFooter } from "./footer.css";

export default function Footer() {
  return (
    <>
      <StyledFooter>
        <Container>
          <Flex>
            <ul>
              <HeaderText varient="h3" fontSize="15px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </HeaderText>
              <li>+1-543-123-4567</li>
              <li>example@huddle.com</li>
            </ul>
            <ul>
              <li>About Us</li>
              <li>What We Do</li>
              <li>FAQ</li>
            </ul>

            <ul>
              <li>Career</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </Flex>
          <div
            style={{
              marginLeft: "2.5rem",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <HeaderText varient="h3">Follows Us</HeaderText>

            <HeaderText varient="p">
              &copy; 2021 Huddle. All rights reserved
            </HeaderText>
          </div>
          <SocialDiv>
            <div>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-youtube"></i>
            </div>
          </SocialDiv>
        </Container>
      </StyledFooter>
    </>
  );
}
