import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* grid-template-columns: repeat(2, auto);
  column-gap: 50px; */
  > div {
    flex: 0 0 auto;
    width: 50%;
  }
`;
