import React from "react";
import { NavLink } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <div>
        <h1>This is the contact page</h1>
        <NavLink to={`${4}`}> edit contact</NavLink>
      </div>
    </>
  );
}
