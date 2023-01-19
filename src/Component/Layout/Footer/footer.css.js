import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: black;
  position: sticky;
  top: 100%;
  ul {
    list-style-type: none;
  }
  ul li {
    margin-bottom: 20px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    ul {
      padding: 0;
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  & > ul {
    flex: 1;
    width: fit-content;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    padding: 0px 20px;
    & ul {
      flex-basis: 50%;
    }
  }
`;

export const SocialDiv = styled.div`
  /* display: flex;
  flex: 1; */
  margin-left: 2rem;
  > div > i {
    padding: 0px 3px;
  }
`;
export const StyledFooterDiv = styled.div`
  background-color: #000;
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
  color: #fff;
  font-size: 14px;
`;
