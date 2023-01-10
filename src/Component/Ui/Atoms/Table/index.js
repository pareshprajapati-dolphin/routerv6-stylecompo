import React from "react";
import {
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
}) {
  return (
    <TableContainer tableBorder={tableBorder}>
      <TableHead backgroundColor={backgroundColor} color={color}>
        <TableTr backgroundColor={backgroundColor} color={color}>
          {tableHeader?.map((header, i) => (
            <TableTh
              backgroundColor={backgroundColor}
              color={color}
              scope="col"
              key={i}
              stripedcolumn={stripedcolumn}
            >
              {header?.title}
            </TableTh>
          ))}
        </TableTr>
      </TableHead>
      <tbody>
        {tableData.length > 0 &&
          tableData.map((item, id) => {
            return (
              <TableTr
                color={color}
                backgroundColor={backgroundColor}
                key={id}
                stripedRow={stripedRow}
                hoverRow={hoverRow}
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
          })}
      </tbody>
    </TableContainer>
  );
}
