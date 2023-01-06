import styled from "styled-components";
import HeaderText from "../heading/headerText";
// import { StyledCard } from "./Card.style";

const StyledCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 40px;
  flex-direction: ${({ layout }) => layout || "row"};

  & > div {
    flex: 1;
  }
  :hover {
    transition: all 0.3s ease;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

const StyledImage = styled.img`
  width: 80%;
  border-radius: 15px;
`;

export default function Card({ item: { title, body, image } }) {
  return (
    <StyledCard>
      <div>
        <HeaderText varient="h2">{title}</HeaderText>
        <HeaderText varient="p">{body}</HeaderText>
      </div>

      <div>
        <StyledImage img src={`${image}`} alt="" />
      </div>
    </StyledCard>
  );
}
