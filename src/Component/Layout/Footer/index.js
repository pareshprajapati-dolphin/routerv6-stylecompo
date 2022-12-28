import React from "react";

import { Container } from "../../Ui/Atoms/Container/ContainerStyled";
import { Flex, SocialDiv, StyledFooter } from "./footer.css";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
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
        <div className="footer-social">
          <h3>Follows Us</h3>
          <SocialDiv>
            <div>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-youtube"></i>
            </div>
          </SocialDiv>
        </div>

        <p>&copy; 2021 Huddle. All rights reserved</p>
      </Container>
    </StyledFooter>
  );
}
