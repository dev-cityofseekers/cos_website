// index.tsx
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import Imprint from "./pages/Imprint";
import Layout from "./components/layouts/Layout";
import DataPolicy from "./pages/DataPolicy";
import Ep from "./pages/Ep";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="/imprint"
          element={
            <Layout>
              <Imprint />
            </Layout>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <Layout>
              <DataPolicy />
            </Layout>
          }
        />
        <Route
          path="/3012"
          element={
            <Layout>
             <Ep/>
            </Layout>
          }
        />
        <Route
          path="/"
          element={
            <Layout>
              <App />
            </Layout>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
