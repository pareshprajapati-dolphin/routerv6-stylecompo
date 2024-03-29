import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  grid-gap: 5px;
  > div {
    display: flex;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    padding: 40px;
    flex-direction: row;
    background-color: white;
    img {
      width: 30%;
      border-radius: 15px;
    }
    & > div {
      flex: 1;
      padding-left: 10px;
    }
    :hover {
      box-shadow: 0 15px 10px -10px rgba(31, 31, 31, 0.5);
      transition: all 0.3s ease;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: block;
    padding: 10px;
    > div {
      display: flex;
      flex-direction: column;
      margin: 10px 0px;
      img {
        width: 80%;
        border-radius: 15px;
      }
    }
    img {
      width: 100%;
    }
  }
`;
