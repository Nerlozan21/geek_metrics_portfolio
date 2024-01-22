import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactUsPage from "./Pages/ContactUsPage";
import Header from "./Components/Header";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header></Header>
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>}></Route>
        <Route path="/home" element={<HomePage/>}></Route>
        <Route path="/aboutUs" element={<AboutUsPage/>}></Route>
        <Route path="/contactUs" element={<ContactUsPage/>}></Route>
      </Routes>
    </BrowserRouter>
    <Footer></Footer>
  </React.StrictMode>
);

