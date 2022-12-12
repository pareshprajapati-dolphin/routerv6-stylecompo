import styled from "styled-components";
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
  img {
    width: 80%;
    border-radius: 15px;
  }
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

export default function Card({ item: { title, body, image } }) {
  return (
    <StyledCard>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <div>
        <img src={`${image}`} alt="" />
      </div>
    </StyledCard>
  );
}
