import styled from "styled-components";

export const StyledH1 = styled.h1`
  font-size: 30px;
  text-align: center;
`;
export const StyledForm = styled.form`
  margin: 0 auto;
  width: 50%;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #ffffff;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: fit-content;
  }
`;

export const StyleDiv = styled.div`
  background: #eeeee4;
  > div {
    display: flex;
    justify-content: center;
  }
`;

export const StyledImage = styled.img`
  width: 50%;
  margin: 10px 0px;
  border-radius: 10px;
`;
