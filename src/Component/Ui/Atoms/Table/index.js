import React from "react";
import { useState } from "react";
import {
  StyleNoData,
  TableCell,
  TableContainer,
  TableHead,
  TableTh,
  TableTr,
} from "./Table.css";

export default function Table({
  backgroundColor,
  color,
  tableData,
  tableHeader,
  stripedRow,
  stripedcolumn,
  hoverRow,
  tableBorder,
  tableBorderless,
  tablelheadeColor,
}) {
  const [sortingField, setSortingField] = useState("");
  const [sortingOrder, setSortingOrder] = useState("asc");
  const handleSortble = (fields) => {
    // console.log("_pp test", fields);
    const order =
      fields === sortingField && sortingOrder === "asc" ? "dec" : "asc";
    setSortingField(fields);
    // console.log("order:", order);
    setSortingOrder(order);
  };

  return (
    <div
      style={{
        overflowY: "auto",
        height: "500px",
      }}
    >
      <TableContainer tableBorder={tableBorder}>
        <TableHead backgroundColor={backgroundColor} color={color}>
          <TableTr color={color}>
            {tableHeader?.map((header, i) => (
              <TableTh
                backgroundColor={backgroundColor}
                color={color}
                scope="col"
                key={i}
                tablelheadeColor={tablelheadeColor}
                stripedcolumn={stripedcolumn}
                onClick={() =>
                  header.sortable ? handleSortble(header.key) : null
                }
              >
                {header?.title}
              </TableTh>
            ))}
          </TableTr>
        </TableHead>
        <tbody>
          {tableData.length > 0 ? (
            tableData.map((item, id) => {
              return (
                <TableTr
                  color={color}
                  backgroundColor={backgroundColor}
                  key={id}
                  stripedRow={stripedRow}
                  hoverRow={hoverRow}
                  tableBorderless={tableBorderless}
                >
                  {tableHeader.map((header, i) => (
                    <TableCell
                      scope="row"
                      key={i}
                      stripedcolumn={stripedcolumn}
                      tableBorder={tableBorder}
                    >
                      {item[header?.key]}
                    </TableCell>
                  ))}
                </TableTr>
              );
            })
          ) : (
            <TableTr>
              <TableCell colSpan="6">
                <StyleNoData>No Data Found</StyleNoData>
              </TableCell>
            </TableTr>
          )}
        </tbody>
      </TableContainer>
    </div>
  );
}
