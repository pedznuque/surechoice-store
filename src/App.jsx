import React from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import PromoBanner from "./components/PromoBanner";
import { Routes, Route } from "react-router";
import Home from "./components/Home";
import Store from "./components/Store";
import About from "./components/About";
import Contacts from "./components/Contacts";

function App() {
  return (
    <>
      <PromoBanner />
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="store" element={<Store/>} />
        <Route path="about" element={<About/>} />
        <Route path="contacts" element={<Contacts/>} />
      </Routes>
    </>
  );
}

export default App;
