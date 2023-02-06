import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Route";
import Layout from "./Layout";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Layout>
            <Routes />
          </Layout>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
