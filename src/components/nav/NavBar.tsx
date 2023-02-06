import React from "react";
import { NavLink } from "react-router-dom";

interface Props {}

const NavBar: React.FC<Props> = () => {
  return (
    <>
      <header className="head">
        <div className="head__section">
          <NavLink className={"list-link"} to={"/"}>
            Home
          </NavLink>
          <NavLink className={"list-link"} to={"/product"}>
            Products
          </NavLink>
          <NavLink className={"list-link"} to={"/buy/my-cart"}>
            Cart
          </NavLink>
          <NavLink className={"list-link"} to={"/buy/select-address"}>
            Select Address
          </NavLink>
          <NavLink className={"list-link"} to={"/buy/checkout"}>
            Checkout
          </NavLink>
          <NavLink className={"list-link"} to={"/orders/my-orders"}>
            Orders
          </NavLink>
          <NavLink className={"list-link"} to={"/admin/manage-products"}>
            Manage Products
          </NavLink>
          <NavLink className={"list-link"} to={"/admin/manage-orders"}>
            Manage Orders
          </NavLink>
          <NavLink className={"list-link"} to={"/admin/manage-users"}>
            Manage Users
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default NavBar;
