import Products from "./products";
import NewProducts from "./newProducts";
import Home from "./home";
import About from "./about";
import Featured from "./features";
import Confirmed from "./confirm";
import Profile from "./profile";
import { FC } from "react";
import MainStore from "./mainStore";
import SubStore1 from "./subStore1";
import SubStore2 from "./subStore2";

export interface IRoutes {
  path: string;
  Component: FC;
  route?: IRoutes[];
}

export const routes: IRoutes[] = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/profile",
    Component: Profile,
  },
  {
    path: "/confirmed",
    Component: Confirmed,
  },
  {
    path: "/products/*",
    Component: Products,
    route: [
      {
        path: "featured",
        Component: Featured,
      },
      {
        path: "new",
        Component: NewProducts,
      },
    ],
  },
  {
    path: "/store/*",
    Component: MainStore,
    route: [
      {
        path: "store1",
        Component: SubStore1,
      },
      {
        path: "store2",
        Component: SubStore2,
      },
    ],
  },
];
