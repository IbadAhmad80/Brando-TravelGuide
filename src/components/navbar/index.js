import React from "react";
import "../../styles/navbar.css";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../assets/logo.PNG";

export default function NavBar() {
  return (
    <header>
      <a href="#home" className="logo">
        <img src={logo} alt="bandago" />
      </a>

      <input type="checkbox" id="menu-bar"></input>
      <label htmlFor="menu-bar">
        <AiOutlineMenu />
      </label>

      <nav className="navbar">
        <h2> | </h2>
        <a href="#home">ABOUT</a>
        <a href="#features">PACKAGES</a>
        <a href="#about">SERVICES</a>
        <a href="#review">OFFER</a>
        <a href="#pricing">BLOG</a>
        <a href="#contact">CONTACT</a>
      </nav>
      <span className="holiday-nav">
        <p>ENJOY HOLIDAYS ?</p>
        <a href="#contact">Book Now!</a>
      </span>
    </header>
  );
}
