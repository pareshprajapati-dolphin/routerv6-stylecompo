import React from "react";
import HeaderText from "../../Ui/Atoms/heading/headerText";
import { Flex, StyledFooter, StyledFooterDiv } from "./footer.css";

export default function Footer() {
  return (
    <>
      <StyledFooter>
        <Flex>
          <ul>
            <HeaderText varient="h3" fontSize="15px">
              COMPANY
            </HeaderText>
            <li>About Us</li>
            <li>Customer Service</li>
            <li>Contact us</li>
          </ul>
          <ul>
            <HeaderText varient="h3" fontSize="15px">
              LEGAL
            </HeaderText>
            <li>Search Teams</li>
            <li>Privacy and Cookie Policy</li>
          </ul>
          <ul>
            <HeaderText varient="h3" fontSize="15px">
              NEWSLATTER
            </HeaderText>
            <HeaderText varient="h3" fontSize="15px">
              Subscribe to our mailing to get the new updates.
            </HeaderText>
            {/* <Input labelName="" /> */}
          </ul>
          <ul>
            <HeaderText varient="h3" fontSize="20px">
              LEGAL
            </HeaderText>
            <li>Search Teams</li>
            <li>Privacy and Cookie Policy</li>
          </ul>
        </Flex>

        <StyledFooterDiv>
          <span>&copy; 2021 Huddle. All rights reserved</span>
          <span>Design & Develop by Paresh Prajapati</span>
        </StyledFooterDiv>
      </StyledFooter>
    </>
  );
}
