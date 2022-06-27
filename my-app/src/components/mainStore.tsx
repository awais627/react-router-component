import { Link, Outlet } from "react-router-dom";
import React from "react";
import { routes } from "./myRoutes";
import MapMain from "./mapMain";

const MainStore = () => {
  return (
    <>
      <nav className={"sub"}>
        <Link to="store1">Store1</Link>
        <Link to="store2">Store2</Link>
      </nav>
      <div>MainStore</div>
      <MapMain routes={routes} FComponent={MainStore} />
    </>
  );
};
export default MainStore;
