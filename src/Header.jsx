import React from "react";
import "./App.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
let a = [1,2,3]
let b = [4,5,6]
// let c = [...a,...b]
let c = a.push(...b)
console.log(c)

const Header = () => {
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container className="contai">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto header-lin-wrappekr">
            <NavLink className="navlink" to="/addproduct">Add Product </NavLink>
            <NavLink className="navlink" to="/updateproduct">Update Product </NavLink>
            <NavLink className="navlink" to="/register">Register </NavLink>
            <NavLink className="navlink" to="/login">Login </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
