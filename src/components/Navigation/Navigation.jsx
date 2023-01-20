import React, { useState } from "react";
import Navbar from "./Navbar";
import { routes } from "../../constant";
import Drawer from "./Drawer";

const Navigation = ({handleLoginClick,handleSignupClick}) => {
  const [isOpen, setIsOpen] = useState(false);

 
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Drawer routes={routes} isOpen={isOpen} toggleDrawer={toggleDrawer} />
      <Navbar routes={routes} toggleDrawer={toggleDrawer} handleLoginClick={handleLoginClick}  
      handleSignupClick={handleSignupClick} />
    </div>
  );
};

export default Navigation;
