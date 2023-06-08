import React from "react";

import { Link } from "react-router-dom";

import HomeScreen from "./screen/HomeScreen";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { Routes, Route } from "react-router-dom";
import LoginScreen from "./screen/LoginScreen";
import RegisterScreen from "./screen/RegisterScreen";
import CartScreen from "./screen/CartScreen";
import BookScreen from "./screen/BookScreen";

function App() {
  return (
    <div className="App">
      <main>
        <Header />

        <Routes>
          <Route path="/" element={<HomeScreen />} exact />
          <Route path="book/:id" element={<BookScreen />} exact />
          <Route path="/Login" element={<LoginScreen />} exact />
          <Route path="/Register" element={<RegisterScreen />} exact />
          <Route path="/cart/:id?" element={<CartScreen />} exact />
        </Routes>
      </main>
    </div>
  );
}

export default App;
