import React from "react";
import NavBar from "./components/nav/NavBar";
import Sigup from "./components/auth/Signup";
import { useModalContext } from "./state/modalContext";

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  const { modal } = useModalContext();

  return (
    <>
      <div>
        <NavBar />
        <div className="page">{children}</div>
        {modal && modal}
      </div>
    </>
  );
};

export default Layout;
