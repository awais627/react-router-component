import Products from "./products";
import NewProducts from "./newProducts";
import Home from "./home";
import About from "./about";
import Featured from "./features";
import Confirmed from "./confirm";
import Profile from "./profile";
import { FC } from "react";

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
];
