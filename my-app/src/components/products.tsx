import { Link, Outlet, Route, Routes } from "react-router-dom";
import MapMain from "./mapMain";
import { routes } from "./myRoutes";
import React from "react";

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
      {routes.map(({ path, Component, route }) =>
        route && Component == Products ? <MapMain routes={route} /> : ""
      )}
      <Outlet />
    </>
  );
};
export default Products;
