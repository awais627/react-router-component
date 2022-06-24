import React, { FC } from "react";
import { routes } from "./components/myRoutes";
import MapMain from "./components/mapMain";
import Navbar from "./components/navbar";

const App: FC = () => {
  return (
    <div className="App">
      <Navbar />
      <MapMain routes={routes} />
    </div>
  );
};

export default App;
