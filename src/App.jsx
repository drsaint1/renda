import React from "react";
import Home from "./pages/Home";
import  { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Products";
import Services from "./pages/Services";
import Footer from "./components/footer";
import Navigation from "./components/Navigation/Navigation";
import Login from "./pages/Login";
import Signup  from "./pages/Signup";






const App = () => {
    const [isShowLogin, setIsShowLogin] = useState(true);

    const handleLoginClick = () => {
      setIsShowLogin((isShowLogin) => !isShowLogin);
    };

    
    const [isShowSignup, setIsShowSignup] = useState(true);

    const handleSignupClick = () => {
        setIsShowSignup((isShowSignup) => !isShowSignup);
    };
  return (
    
   
    <Router>
    <Navigation handleLoginClick={handleLoginClick}
           handleSignupClick={handleSignupClick} />
      <Login isShowLogin={isShowLogin} />
      <Signup  isShowSignup={isShowSignup}/>
      <Home/>
     
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Projects />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer/>
    </Router>
    
  );
};

export default App;
