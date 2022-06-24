import { Route, Routes } from "react-router-dom";
import React, { FC } from "react";
import { IRoutes, routes } from "./myRoutes";
import MapMain from "./mapMain";

interface IMapMainProps {
  routes: IRoutes[];
  FComponent: FC;
}

const Nested: FC<IMapMainProps> = ({ routes, FComponent }) => {
  return (
    <>
      {routes.map(({ path, Component, route }) =>
        route && Component == FComponent ? <MapMain routes={route} /> : ""
      )}
    </>
  );
};
export default Nested;
