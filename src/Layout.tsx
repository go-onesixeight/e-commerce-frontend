import React from "react";
import NavBar from "./components/nav/NavBar";
import Sigup from "./components/auth/Signup";

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div>
        <NavBar />
        <div className="page">{children}</div>
        <Sigup/>
      </div>
    </>
  );
};

export default Layout;
