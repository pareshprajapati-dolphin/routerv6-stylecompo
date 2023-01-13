import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  grid-gap: 10px;
  align-items: center;
  @media (max-width: ${({ theme }) => theme?.mobile}) {
    display: block;
  }
`;

export const TableWrap = styled.div`
  padding: 10px 0px;
  width: 50%;
  @media (max-width: ${({ theme }) => theme?.mobile}) {
    width: 100%;
  }
`;
