import styled from "styled-components";
import HeaderText from "../heading/headerText";
// import { StyledCard } from "./Card.style";

const StyledCard = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 20px 0px;
  padding: 20px;
  flex-direction: ${({ layout }) => layout || "row"};
  :hover {
    transition: all 0.3s ease;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

const HeaderTextDiv = styled.div`
  max-width: 500px;
`;
const StyledImage = styled.img`
  max-width: 200px;
  border-radius: 15px;
`;

const StyleImgDiv = styled.div`
  max-width: 200px;
`;

export default function Card({ item: { title, body, image } }) {
  return (
    <StyledCard>
      <HeaderTextDiv>
        <HeaderText varient="h2">{title}</HeaderText>
        <HeaderText varient="p">{body}</HeaderText>
      </HeaderTextDiv>

      <StyleImgDiv>
        <StyledImage img src={`${image}`} alt="" />
      </StyleImgDiv>
    </StyledCard>
  );
}
