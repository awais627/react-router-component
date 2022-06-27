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
import PageNotFound from "./pageNotFound";

export interface IRoutes {
  path: string;
  Component: FC;
  Private: boolean;
  route?: IRoutes[];
}

export const routes: IRoutes[] = [
  {
    path: "*",
    Component: PageNotFound,
    Private: false,
  },
  {
    path: "/",
    Component: Home,
    Private: false,
  },
  {
    path: "/about",
    Component: About,
    Private: false,
  },
  {
    path: "/profile",
    Component: Profile,
    Private: true,
  },
  {
    path: "/confirmed",
    Component: Confirmed,
    Private: false,
  },
  {
    path: "/products/*",
    Component: Products,
    Private: false,
    route: [
      {
        path: "featured",
        Component: Featured,
        Private: false,
      },
      {
        path: "new",
        Component: NewProducts,
        Private: false,
      },
    ],
  },
  {
    path: "/store/*",
    Component: MainStore,
    Private: false,
    route: [
      {
        path: "store1",
        Component: SubStore1,
        Private: false,
      },
      {
        path: "store2",
        Component: SubStore2,
        Private: false,
      },
    ],
  },
];
