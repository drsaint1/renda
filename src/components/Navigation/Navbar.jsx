import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Menu from "./Menu";


const Navbar = ({ toggleDrawer, routes, handleLoginClick,handleSignupClick }) => {
    const handleClickLogin = () => {
        handleLoginClick();
      };
      const handleClickSignup = () => {
        handleSignupClick();
      };
  return (
    <SNavbar>
      <NavContainer>
        <DrawerButton onClick={toggleDrawer}>
          <FaBars />
        </DrawerButton>
        <SNavbarBrand>RENDA</SNavbarBrand>
        <RightNav>
          <NavRoutes>
            {routes.map((route) => {
              if (route.subRoutes) {
                return <Menu route={route} key={route.name} />;
              }
              return (
                <NavRoute to={route.link} key={route.name}>
                  {route.name}
                </NavRoute>
              );
            })}
          </NavRoutes>
          <LoginButton onClick={handleClickLogin} >Login</LoginButton>
          <LoginButton onClick={handleClickSignup} >Sign Up</LoginButton>
          
        </RightNav>
      </NavContainer>
    </SNavbar>
  );
};

export default Navbar;

const DrawerButton = styled.button`
  all: unset;
  font-size: 3rem;
  display: grid;
  @media (min-width: 768px) {
    display: none;
  }
`;

const SNavbar = styled.nav`
  background-color: #19105a;
  position: fixed; 
  top: 0; 
  width: 100%;
  z-index:999;
`;
const NavContainer = styled.div`
  padding: 1rem;
  height: 70px;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;
const SNavbarBrand = styled.h2`
  font-size: 3rem;
`;
const RightNav = styled.div`
  display: flex;
  gap: 2rem;
`;
const NavRoutes = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  display: flex;
  gap: 1rem;
  font-size: 2rem;
  align-items: center;
`;
const NavRoute = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 0.5rem;
  transition: 0.5s ease;

  &:hover {
    transition: 0.5s ease;
    color: black;
    border-radius:10px;
    background-color: white;
    box-shadow: 0px 0px 10px white;
  }
`;

const LoginButton = styled(Link)`
@media (max-width: 768px) {
    display: none;
}
    
  text-decoration: none;
  color: white;
  font-size: 2rem;
  padding: 0.5rem;
  background-color:#19105a;

  &:hover {
  color:black;
  border-radius: 10px;
 transition: 0.3s ease;
 box-shadow: 0px 0px 10px ;
 background-color:white;


  
 
 
`;
