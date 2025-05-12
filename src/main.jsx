import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Shop from "./components/Shop"
import ContactUs from "./components/ContactUs"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import "./assets/general.css"

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
);