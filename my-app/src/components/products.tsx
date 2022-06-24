import { Link, Outlet, Route, Routes } from "react-router-dom";
import MapMain from "./mapMain";
import { routes } from "./myRoutes";
import React from "react";
import Nested from "./NextedMap";

const Products = () => {
  return (
    <>
      <div>
        <input placeholder="Search" />
      </div>
      <nav className={"sub"}>
        <Link to="featured">Features</Link>
        <Link to="new">New</Link>
      </nav>
      <Nested routes={routes} FComponent={Products} />
      <Outlet />
    </>
  );
};
export default Products;
