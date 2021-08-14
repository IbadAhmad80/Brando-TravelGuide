import React from "react";
import Footer from "../footer";
import Form from "./contact-from";
import ContactLinks from "./contact-links";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contact_container}>
      <h2 className={styles.main_heading}>CONTACT US NOW</h2>
      <h4 className={styles.sub_heading}>GET IN TOUCH WITH US</h4>
      <ContactLinks />
      <Form />
      <Footer />
    </div>
  );
}
