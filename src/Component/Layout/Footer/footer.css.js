import styled from "styled-components";

export const StyledFooter = styled.div`
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
  p {
    text-align: right;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  & > div,
  & > ul {
    flex: 1;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
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
