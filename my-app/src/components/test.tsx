import { Route, Routes } from "react-router-dom";
import React, { FC } from "react";
import { IRoutes } from "./myRoutes";
import MapMain from "./mapMain";

interface IMapMainProps {
  routes: IRoutes[];
  FComponent?: FC;
}

const Test: FC<IMapMainProps> = ({ routes, FComponent }) => {
  return (
    <>
      <Routes>
        {FComponent
          ? routes.map(({ path, Component, route }) =>
              route && Component == FComponent
                ? route.map(({ path, Component }) => (
                    <Route path={path} element={<Component />} />
                  ))
                : ""
            )
          : routes.map(({ path, Component }) => (
              <Route path={path} element={<Component />} />
            ))}
      </Routes>
    </>
  );
};
export default Test;
