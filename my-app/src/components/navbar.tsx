import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <NavLink to="./">Home</NavLink>
      <NavLink to="./about">About</NavLink>
      <NavLink to="./profile">Profile</NavLink>
      <NavLink to="./products">Products</NavLink>
      <NavLink to="./store">Products</NavLink>
    </>
  );
};
export default Navbar;
