import React, { FC } from "react";
import { routes } from "./components/myRoutes";
import MapMain from "./components/mapMain";
import Navbar from "./components/navbar";
import Test from "./components/test";

const App: FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Test routes={routes} />
    </div>
  );
};

export default App;
