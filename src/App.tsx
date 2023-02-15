import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Route";
import Layout from "./Layout";
import "./fontawesome/index";
import ModalContextProvider from "./state/modalContext";
import AuthContextProvider from "./state/authContext";

function App() {
  return (
    <>
      <div className="App">
        <AuthContextProvider>
        <ModalContextProvider>
          <BrowserRouter>
            <Layout>
              <Routes />
            </Layout>
          </BrowserRouter>
        </ModalContextProvider>
        </AuthContextProvider>
      </div>
    </>
  );
}

export default App;
