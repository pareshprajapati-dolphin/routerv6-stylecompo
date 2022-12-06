import React from "react";
import styled from "styled-components";

// const containerDiv = styled.div``;

const SelectDiv = styled.select`
  width: auto;
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
const Label = styled.label`
  width: 100px;
  padding: 3px 5px;
  font-size: 20px;
`;

export default function Select({
  name,
  value,
  onChange,
  optionList,
  labelName,
}) {
  return (
    <containerDiv>
      <Label>{labelName}</Label>
      <SelectDiv onChange={onChange} name={name} value={value}>
        {optionList.map((optionData, i) => {
          return (
            <option value={optionData.value} key={i}>
              {optionData.name}
            </option>
          );
        })}
      </SelectDiv>
    </containerDiv>
  );
}
