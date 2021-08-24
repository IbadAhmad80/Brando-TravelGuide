import React from "react";
import styles from "./navbar.module.css";
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
    <header className={scrolled ? styles.sticky_header : styles.normal_header}>
      <a href="/#home" className={styles.logo}>
        <img src={logo} alt="logo" height="30" />
      </a>

      <input type="checkbox" id="menu-bar"></input>
      <label htmlFor="menu-bar">
        <AiOutlineMenu />
      </label>

      <nav className={styles.navbar}>
        <h2> | </h2>

        <a href="/#about">ABOUT</a>

        <a href="/#packages">PACKAGES</a>
        <a href="/#services">SERVICES</a>
        <a href="/#offers">OFFERS</a>
        <a href="/#blogs">BLOGS</a>
        <a href="/#contact">CONTACT</a>
      </nav>
      <span className={styles.holiday_nav}>
        <p>ENJOY HOLIDAYS ?</p>
        <a href="/#contact">Book Now!</a>
      </span>
    </header>
  );
}
