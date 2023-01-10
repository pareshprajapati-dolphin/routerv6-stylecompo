import React from "react";
import Button from "../../Component/Ui/Atoms/button";
import Card from "../../Component/Ui/Atoms/Card";
import Table from "../../Component/Ui/Atoms/Table";
import HeaderText from "../../Component/Ui/Atoms/heading/headerText";
import { Content } from "../../style/global.css.";
import { Wrapper } from "./Detail.css";

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
];

const tableheader = [
  {
    key: "id",
    title: "Id",
  },
  {
    key: "date",
    title: "Date",
  },
  {
    key: "customerName",
    title: "Customer Name",
  },

  {
    key: "invoice",
    title: "Invoice",
  },
  {
    key: "action",
    title: "Action",
    type: "action",
  },
];

export default function Details() {
  return (
    <Content>
      <HeaderText varient="h2">Noraml Table</HeaderText>
      <Table tableHeader={tableheader} tableData={tableData} />
      <div style={{ padding: "10px 0px" }}>
        <HeaderText varient="h2">Table colors</HeaderText>
        <Table
          tableHeader={tableheader}
          tableData={tableData}
          backgroundColor="#000"
          color="#ffffff"
        />
      </div>
      <div style={{ padding: "10px 0px" }}>
        <HeaderText varient="h2">Table colors</HeaderText>
        <Table
          tableHeader={tableheader}
          tableData={tableData}
          backgroundColor="#cef0eb"
        />
      </div>

      <div>
        <HeaderText varient="h2">Table Striped Row</HeaderText>
        <Table
          stripedRow="stripedRow"
          tableHeader={tableheader}
          tableData={tableData}
        />
      </div>
      <div>
        <HeaderText varient="h2">Table Striped column</HeaderText>
        <Table
          stripedcolumn="stripedcolumns"
          tableHeader={tableheader}
          tableData={tableData}
        />
      </div>

      <div>
        <HeaderText varient="h2">Table Striped row Hoverable</HeaderText>
        <Table
          tableHeader={tableheader}
          tableData={tableData}
          hoverRow="hoverRow"
        />
      </div>

      <div>
        <HeaderText varient="h2">Table Bordered Tables</HeaderText>
        <Table
          tableHeader={tableheader}
          tableData={tableData}
          tableBorder="true"
        />
      </div>
    </Content>
  );
}
