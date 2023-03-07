import React from "react"

import Navbar from "./common/Navbar";
import Aboutme from "./pages/AboutMe";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Awards from "./pages/Awards";
import Footer from "./common/Footer";


function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Aboutme/>
    <Education/>
    <Awards/>
    <Footer/> 
    </>
  );
}

export default App;
