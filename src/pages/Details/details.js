import React from "react";
import Table from "../../Component/Ui/Atoms/Table";
import HeaderText from "../../Component/Ui/Atoms/heading/headerText";
import { Content } from "../../style/global.css.";
import { TableWrap, Wrapper } from "./Detail.css";

const tableData = [
  {
    id: "1",
    customerName: "Bobby Davis",
    date: "October 15, 2021",
    invoice: "$2,300",
  },
  {
    id: "2",
    customerName: "Christopher Neal",
    date: "October 7, 2021",
    invoice: "$5,500",
  },
  {
    id: "3",
    customerName: "Bobby Davis",
    date: "October 5, 2021",
    invoice: "$2,420",
  },
  {
    id: "4",
    customerName: "Monkey Karry",
    date: "October 2, 2021",
    invoice: "$7,452",
  },
  {
    id: "5",
    customerName: "James White",
    date: "October 13, 2021",
    invoice: "$5,500",
  },
  {
    id: "6",
    customerName: "James White",
    date: "October 13, 2021",
    invoice: "$5,500",
  },
  {
    id: "7",
    customerName: "James White",
    date: "October 13, 2021",
    invoice: "$5,500",
  },
  {
    id: "8",
    customerName: "James White",
    date: "October 13, 2021",
    invoice: "$5,500",
  },
  {
    id: "9",
    customerName: "James White",
    date: "October 13, 2021",
    invoice: "$5,500",
  },
  {
    id: "10",
    customerName: "James White",
    date: "October 13, 2021",
    invoice: "$5,500",
  },
];

const tableheader = [
  {
    key: "id",
    title: "Id",
    sortable: false,
  },
  {
    key: "date",
    title: "Date",
    sortable: true,
  },
  {
    key: "customerName",
    title: "Customer Name",
    sortable: true,
  },

  {
    key: "invoice",
    title: "Invoice",
    sortable: false,
  },
  {
    key: "action",
    title: "Action",
    type: "action",
    sortable: false,
  },
];

export default function Details() {
  return (
    <Content>
      <HeaderText varient="h2">Noraml Table</HeaderText>
      <Table tableHeader={tableheader} tableData={tableData} />

      <Wrapper>
        <TableWrap>
          <HeaderText varient="h2">Table colors</HeaderText>
          <Table
            tableHeader={tableheader}
            tableData={tableData}
            backgroundColor="#000"
            color="#ffffff"
          />
        </TableWrap>
        <TableWrap>
          <HeaderText varient="h2">Table colors</HeaderText>
          <Table
            tableHeader={tableheader}
            tableData={tableData}
            backgroundColor="#cef0eb"
          />
        </TableWrap>
      </Wrapper>
      <Wrapper>
        <TableWrap>
          <HeaderText varient="h2">Table Striped Row</HeaderText>
          <Table
            stripedRow="stripedRow"
            tableHeader={tableheader}
            tableData={tableData}
          />
        </TableWrap>
        <TableWrap>
          <HeaderText varient="h2">Table Striped column</HeaderText>
          <Table
            stripedcolumn="stripedcolumn"
            tableHeader={tableheader}
            tableData={tableData}
          />
        </TableWrap>
      </Wrapper>
      <Wrapper>
        <TableWrap>
          <HeaderText varient="h2">Table Striped row Hoverable</HeaderText>
          <Table
            tableHeader={tableheader}
            tableData={tableData}
            hoverRow="hoverRow"
          />
        </TableWrap>
        <TableWrap>
          <HeaderText varient="h2">Table Bordered Tables</HeaderText>
          <Table
            tableHeader={tableheader}
            tableData={tableData}
            tableBorder="true"
          />
        </TableWrap>
      </Wrapper>
      <Wrapper>
        <TableWrap>
          <HeaderText varient="h2">Table without-Bordered </HeaderText>
          <Table
            tableHeader={tableheader}
            tableData={tableData}
            tableBorderless="true"
          />
        </TableWrap>
        <TableWrap>
          <HeaderText varient="h2">Table Head color</HeaderText>
          <Table
            tableHeader={tableheader}
            tableData={tableData}
            tablelheadeColor="#f3f6f9"
          />
        </TableWrap>
      </Wrapper>
    </Content>
  );
}
