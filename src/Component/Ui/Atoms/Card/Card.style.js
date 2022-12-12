import styled from "styled-components";

export const StyledCard = styled.div`
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
  }
  & > div {
    flex: 1;
  }
  :hover {
    // box-shadow: 0 15px 10px -10px rgba(31, 31, 31, 0.5);
    transition: all 0.3s ease;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
