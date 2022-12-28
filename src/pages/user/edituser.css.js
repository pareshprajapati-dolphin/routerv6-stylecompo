import styled from "styled-components";

export const TableContainer = styled.div`
  table {
    width: 100%;
    height: 100%;
    border-collapse: collapse;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.08);
  }
  thead {
    height: 64px;
    background: #3c1742;
  }
  thead th {
    font-size: 14px;
    color: #ff0099;
    text-align: left;
    padding: 0px 30px;
  }
  tr {
    height: 64px;
    border-bottom: 2px solid grey;
  }
  tr td {
    padding: 0px 30px;
    border-bottom: 1px solid #3c1742;
  }
  @media only screen and (max-width: 992px) {
    table {
      white-space: nowrap;
    }
  }
`;

export const StyledH1 = styled.h1`
  display: flex;
  padding: 10px;
`;
export const StyledForm = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;
