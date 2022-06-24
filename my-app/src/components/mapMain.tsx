import { Route, Routes } from "react-router-dom";
import { FC } from "react";
import { IRoutes } from "./myRoutes";

interface IMapMainProps {
  routes: IRoutes[];
}

const MapMain: FC<IMapMainProps> = ({ routes }) => {
  return (
    <>
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route path={path} element={<Component />} />
        ))}
      </Routes>
    </>
  );
};
export default MapMain;
