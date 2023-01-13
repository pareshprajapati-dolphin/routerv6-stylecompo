import styled, { css } from "styled-components";

export const TableContainer = styled.table`
  width: 100%;
  height: 100%;
  border-collapse: ${({ tableBorder }) => (tableBorder ? "" : "collapse")};
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.08);
  @media only screen and (max-width: 992px) {
    table {
      white-space: nowrap;
    }
  }
`;
export const TableHead = styled.thead`
  height: 64px;
  background: ${({ backgroundColor }) => backgroundColor || "#ffff"};
`;

export const TableTh = styled.th`
  font-size: 15px;
  position: sticky;
  top: 0;
  background: ${({ backgroundColor, tablelheadeColor }) =>
    tablelheadeColor || backgroundColor || "#ffff"};
  color: ${({ color }) => color || "#000"};
  text-align: left;
  padding: 0px 30px;
  ${({ stripedcolumn }) =>
    stripedcolumn &&
    css`
      :nth-child(odd) {
        background-color: #e7e5e5;
      }
      :nth-child(even) {
        background-color: #fff;
      }
    `}
`;

export const TableTr = styled.tr`
  height: 58px;
  border-bottom: ${({ tableBorderless }) =>
    tableBorderless ? "" : "1px solid #dbdde0"};
  background: ${({ backgroundColor }) => backgroundColor || "#ffff"};
  color: ${({ color }) => color || "#000"};

  ${({ stripedRow }) =>
    stripedRow &&
    css`
      :nth-child(odd) {
        background-color: #fbfbfb;
      }
      :nth-child(even) {
        background-color: #fff;
      }
    `}
  &:hover {
    background-color: ${({ hoverRow }) => hoverRow && "#f3f6f9"};
  }
`;

export const TableCell = styled.td`
  padding: 0px 30px;
  ${({ stripedcolumn }) =>
    stripedcolumn &&
    css`
      :nth-child(odd) {
        background-color: #fbfbfb;
      }
      :nth-child(even) {
        background-color: #ffffff;
      }
    `};
`;
export const StyleNoData = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
`;
