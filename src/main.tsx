import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/layout.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import JSON from "./pages/JSON";
import Calculator from "./pages/Calculator";
import Not_Found from "./pages/Not_Found";
import Hobbies from "./pages/Hobbies";
import Memoization from "./pages/memomization";
import Layout from "./layout";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Home Page (No Layout) */}
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />

        {/* Layout wraps all other pages */}
        <Route element={<Layout />}>
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/Hobbies" element={<Hobbies />} />
          <Route path="/JSON" element={<JSON />} />
          <Route path="/Memoization" element={<Memoization />} />
          <Route path="/*" element={<Not_Found />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
