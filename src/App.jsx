import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Store from "./components/Store";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Likes from "./components/Likes";
import SearchBar from "./components/SearchBar";
import Account from "./components/Account";

function App() {
 

  return (
      <>
   
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="likes" element={<Likes />} />
            <Route path="about" element={<About />} />
            <Route path="account" element={<Account />} />
          </Routes>
          <NavBar />
       
    </>
  );
}

export default App;
