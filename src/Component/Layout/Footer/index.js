import React from "react";

import { Container } from "../../Ui/Atoms/Container/ContainerStyled";
import HeaderText from "../../Ui/Atoms/heading/headerText";
import { Input } from "../../Ui/Atoms/input";
import { Flex, SocialDiv, StyledFooter } from "./footer.css";

export default function Footer() {
  return (
    <>
      <StyledFooter>
        <Flex>
          <ul className="testAbc">
            <HeaderText varient="h3" fontSize="15px">
              COMPANY
            </HeaderText>
            <li>About Us</li>
            <li>Customer Service</li>
            <li>Contact us</li>
          </ul>
          <ul className="testAbc">
            <HeaderText varient="h3" fontSize="15px">
              LEGAL
            </HeaderText>
            <li>Search Teams</li>
            <li>Privacy and Cookie Policy</li>
          </ul>
          <ul className="testAbc">
            <HeaderText varient="h3" fontSize="15px">
              NEWSLATTER
            </HeaderText>
            <HeaderText varient="h3" fontSize="15px">
              Subscribe to our mailing to get the new updates.
            </HeaderText>
            {/* <Input labelName="" /> */}
          </ul>
          <ul className="testAbc">
            <HeaderText varient="h3" fontSize="20px">
              LEGAL
            </HeaderText>
            <li>Search Teams</li>
            <li>Privacy and Cookie Policy</li>
          </ul>
        </Flex>

        <div
          style={{
            backgroundColor: "#000",
            display: "flex",
            justifyContent: "space-between",
            padding: "20px 10px",
            color: "#fff",
            fontSize: "14px",
          }}
        >
          <span>&copy; 2021 Huddle. All rights reserved</span>
          <span>Design & Develop by Paresh Prajapati</span>
        </div>
      </StyledFooter>
    </>
  );
}
