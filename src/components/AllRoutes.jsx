// import { Routes, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navbar from "./NavBar";
import Home from "../pages/Home";
import Footer from "./Footer";
import About from "../pages/About";

import Login from "../pages/Login";
import Contact from "../pages/Contact";
import StopWatch from "./StopWatch";

export default function AllRoutes() {
  return (
    <>
      <Navbar  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/time" element={<StopWatch />} />
      </Routes>
      <Footer />
    </>
  );
}
