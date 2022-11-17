import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function rootLayout() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet />
    </>
  );
}

export default rootLayout;
