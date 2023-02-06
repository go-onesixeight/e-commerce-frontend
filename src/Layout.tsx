import React from "react";
import NavBar from "./components/nav/NavBar";

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div>
        <NavBar />
        <div className="page">{children}</div>
      </div>
    </>
  );
};

export default Layout;
