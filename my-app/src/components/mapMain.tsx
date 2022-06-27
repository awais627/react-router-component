import { Route, Routes } from "react-router-dom";
import React, { FC } from "react";
import { IRoutes } from "./myRoutes";

interface IMapMainProps {
  routes: IRoutes[];
  FComponent?: FC;
}

const MapMain: FC<IMapMainProps> = ({ routes, FComponent }) => {
  return (
    <>
      <Routes>
        {FComponent
          ? routes.map(({ path, Component, route }) =>
              route && Component == FComponent ? (
                route.map(({ path, Component, Private }) =>
                  !Private ? (
                    <Route path={path} element={<Component />} />
                  ) : (
                    <></>
                  )
                )
              ) : (
                <></>
              )
            )
          : routes.map(({ path, Component, Private }) =>
              !Private ? <Route path={path} element={<Component />} /> : <></>
            )}
      </Routes>
    </>
  );
};
export default MapMain;
