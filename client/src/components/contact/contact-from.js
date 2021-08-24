import { useMutation } from "@apollo/client";
import React from "react";
import { createComment } from "../mutations";
import { getBlogs } from "../query";
import styles from "./contact-form.module.css";
// import { onCompleteMutation } from "../blogs/blog-details";

export default function Form({ type, id, subscribeToNewComments }) {
  const [inputData, setInputData] = React.useState({
    text: "",
    name: "",
    email: "",
  });

  // const data = React.useContext(onCompleteMutation);

  const [createComments] = useMutation(createComment, {
    refetchQueries: [
      {
        query: getBlogs,
        variables: { default: true },
      },
    ],
    // onCompleted: () => data.commentsUpdation(),
  });

  const handleClickEvent = (e) => {
    e.preventDefault();

    type &&
      id &&
      createComments({
        variables: {
          postID: id,
          name: inputData.name,
          text: inputData.text,
          email: inputData.email,
        },
      }).then(() => {
        // setInputData({ name: "", email: "", text: "" });
      });
  };

  return (
    <div>
      <form onSubmit={handleClickEvent} autoComplete="off">
        <div
          className={!type ? styles.form_container : styles.blog_form_container}
        >
          <div className={styles.text_fields}>
            <input
              type="text"
              className={!type ? styles.input_field : styles.blog_input_field}
              placeholder="  * YOUR NAME"
              required
              name="name"
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
              value={inputData.name}
            />
            <input
              type="email"
              required
              className={!type ? styles.input_field : styles.blog_input_field}
              placeholder="  * YOUR EMAIL"
              name="email"
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
              value={inputData.email}
            />
          </div>
          <div className={!type ? styles.text_area : styles.blog_text_area}>
            <textarea
              placeholder=" YOUR MESSAGE"
              className={styles.message}
              name="text"
              onChange={(e) =>
                setInputData({ ...inputData, text: e.target.value })
              }
              value={inputData.text}
            ></textarea>
          </div>
        </div>
        <div
          className={
            !type ? styles.button_container : styles.blog_button_container
          }
        >
          <button className={styles.message_btn}>
            {type ? "POST COMMENT" : "SEND MESSAGE"}
          </button>
        </div>
      </form>

      <div className={styles.bottom_devider}>{}</div>
    </div>
  );
}
