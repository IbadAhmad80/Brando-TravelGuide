import React from "react";
import "./navbar.css";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../assets/logo.webp";

export default function NavBar() {
  const [scrolled, setScrolled] = React.useState(false);

  //sticky header on scroll
  React.useEffect(() => {
    const changeHeaderPosition = () => {
      window.scrollY >= 40 ? setScrolled(true) : setScrolled(false);
    };
    window.addEventListener("scroll", changeHeaderPosition);

    //cleaning up event listner ron unmounting
    return (_) => {
      window.removeEventListener("scroll", changeHeaderPosition);
    };
  }, [scrolled]);

  return (
    <header className={scrolled ? "sticky-header" : "normal-header"}>
      <a href="#home" className="logo">
        <img src={logo} alt="logo" height="40" />
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
