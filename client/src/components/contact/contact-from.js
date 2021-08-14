import React from "react";
import styles from "./contact-form.module.css";

export default function Form() {
  return (
    <div>
      <div className={styles.form_container}>
        <div className={styles.text_fields}>
          <input
            type="text"
            className={styles.input_field}
            placeholder="  * YOUR NAME"
            required
          />
          <input
            type="email"
            required
            className={styles.input_field}
            placeholder="  * YOUR EMAIL"
          />
        </div>
        <div className={styles.text_area}>
          <textarea
            placeholder=" YOUR MESSAGE"
            className={styles.message}
          ></textarea>
        </div>
      </div>
      <div className={styles.button_container}>
        <button className={styles.message_btn}>SEND MESSAGE</button>
      </div>
      <div className={styles.bottom_devider}>{}</div>
    </div>
  );
}
