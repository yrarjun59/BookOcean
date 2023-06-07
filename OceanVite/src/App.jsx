import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from "./components/Header";

import React from 'react'
import LoginForm from "./components/LoginForm";
import Test from "./components/Test";
import HomeScreen from "./screen/HomeScreen";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header/>
      {/* <LoginForm/> */}
       <HomeScreen/>
      {/* <HomeScreen/> */}
      {/* <Footer/> */}
    </div>
  )
}

export default App