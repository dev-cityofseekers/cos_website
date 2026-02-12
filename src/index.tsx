// index.tsx
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import Imprint from "./pages/Imprint";
import Layout from "./components/layouts/Layout";
import DataPolicy from "./pages/DataPolicy";
import Tickets from "./pages/Tickets";
import CodeOfConduct from "./pages/CodeOfConduct";
import Team from "./pages/Team";
import Where from "./pages/Where";
import "./i18n.ts";

const container = document.getElementById("root");
if (!container) {
  throw new Error("Root element not found");
}

const root = createRoot(container);
root.render(
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
          path="/code"
          element={
            <Layout>
              <CodeOfConduct />
            </Layout>
          }
        />
        <Route
          path="/tickets"
          element={
            <Layout>
              <Tickets />
            </Layout>
          }
        />
        <Route
          path="/team"
          element={
            <Layout>
              <Team />
            </Layout>
          }
        />
        <Route
          path="/where"
          element={
            <Layout>
              <Where />
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
  </React.StrictMode>
);
