import React from "react";
import { NavLink, useParams } from "react-router-dom";

export default function EditContact() {
  let { id } = useParams();

  return (
    <div>
      <NavLink to="/contact">Back </NavLink>
      <NavLink to="/details" style={{ padding: "10px" }}>
        Details
      </NavLink>
      <h1>This is the edit contact page {id}</h1>
    </div>
  );
}
