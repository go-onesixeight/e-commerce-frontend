import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../button.tsx/Button";
import { ModalContext, useModalContext } from "../../state/modalContext";

interface Props {}

const NavBar: React.FC<Props> = () => {
  const { setModalType } = useModalContext();
  
  return (
    <>
      <header className="head">
        <div className="head__section">
          <div className="head__logo">
            <NavLink to={"/"}>
              <h2 className="header header--logo">e-Commerce</h2>
            </NavLink>
          </div>
          <div className="head__search">
            <div className="search-input">
              <input type="text" className="search" placeholder="Search" />
            </div>
            <Button className="btn--search">SEARCH</Button>
          </div>
          <div className="head__navbar">
            <ul className="navbar">
              <div className="navbar__lists"></div>
              <div className="navbar__profile">
                <Button className="btn--sign">Sign in</Button>
                <Button
                  className="btn--sign"
                  onClick={() => setModalType("signup")}>
                  Sign up
                </Button>
              </div>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;

{
  /* <NavLink className={"list-link"} to={"/"}>
Home
</NavLink>
<NavLink className={"list-link"} to={"/products"}>
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
</NavLink> */
}
