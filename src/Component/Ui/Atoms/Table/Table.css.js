import styled, { css } from "styled-components";

export const TableContainer = styled.table`
  width: 100%;
  height: 100%;
  border-collapse: ${({ tableBorder }) => !tableBorder && "collapse"};
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
  background: ${({ backgroundColor }) => backgroundColor || "#ffff"};
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
  height: 60px;
  border-bottom: 1px solid grey;
  background: ${({ backgroundColor }) => backgroundColor || "#ffff"};
  color: ${({ color }) => color || "#000"};

  ${({ stripedRow }) =>
    stripedRow &&
    css`
      :nth-child(odd) {
        background-color: #eee;
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
  border-bottom: ${({ tableBorder }) => !tableBorder && "1px solid #3c1742"};
  ${({ stripedcolumn }) =>
    stripedcolumn &&
    css`
      :nth-child(odd) {
        background-color: #e7e5e5;
      }
      :nth-child(even) {
        background-color: #fff;
      }
    `};
`;
