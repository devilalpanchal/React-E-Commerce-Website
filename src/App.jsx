import { useState } from "react";
import "./App.css";
import Header from "./Header";
import { Route, BrowserRouter as Router,Routes } from "react-router-dom";
import Addproduct from "./Addproduct";
import Updateproduct from "./Updateproduct";
import Login from "./Login";
import Register from "./Register";
function App() {
  return (
    <>
      <Router>
        <Header />
      <h2 className="center">E-Commerce WebsitE</h2>

        <Routes>
          <Route path="/addproduct" element={<Addproduct/>} />
          <Route path="/updateproduct" element={<Updateproduct/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
