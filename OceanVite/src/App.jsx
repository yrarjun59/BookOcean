import React from "react";

import { Link } from "react-router-dom";
// import Header from "../components/Header";

import HomeScreen from "./screen/HomeScreen";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { Routes, Route } from "react-router-dom";
import LoginScreen from "./screen/LoginScreen";
import RegisterScreen from "./screen/RegisterScreen";
import CartScreen from "./screen/CartScreen";

function App() {
  return (
    <div className="App">
      <main>
        <Header />

        <Routes>
          <Route path="/" element={<HomeScreen />} exact />
          <Route path="/Login" element={<LoginScreen />} exact />
          <Route path="/Register" element={<RegisterScreen />} exact />

          <Route path="/cart" element={<CartScreen />} exact />
        </Routes>
      </main>
    </div>
  );
}

export default App;
