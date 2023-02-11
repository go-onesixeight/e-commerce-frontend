import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Route";
import Layout from "./Layout";
import "./fontawesome/index";
import ModalContextProvider from "./state/modalContext";

function App() {
  return (
    <>
      <div className="App">
        <ModalContextProvider>
          <BrowserRouter>
            <Layout>
              <Routes />
            </Layout>
          </BrowserRouter>
        </ModalContextProvider>
      </div>
    </>
  );
}

export default App;
