import React from "react";
import styles from "./blog-details.module.css";
import Form from "../contact/contact-from";
import { FaQuoteLeft } from "react-icons/fa";
import { newComment } from "../subscription";
import { useQuery } from "@apollo/client";
import { getComments } from "../query";
import Comments from "./comments";
import SocialLinks from "./social-links";
import { dummy_text, short_dummy_text } from "./BlogsContent";

export default function LeftWrapper({ image, id }) {
  // setting up subscription and query for comments
  const { subscribeToMore, ...result } = useQuery(getComments, {
    variables: { blogID: id },
  });

  // console.log("get query response in left wrapper", result.data && result);

  return (
    <div>
      <img src={image} alt="title pic" />
      <img
        src={
          "https://brandowp.b-cdn.net/travel/wp-content/uploads/sites/8/2016/03/blog-details-img3.jpg.webp"
        }
        alt="pic 1"
      />
      <img
        src={
          "https://brandowp.b-cdn.net/travel/wp-content/uploads/sites/8/2016/03/blog-details-img4.jpg.webp"
        }
        alt="pic 2"
      />
      <h6>
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </span>
        <br />
        <br /> {dummy_text}
      </h6>
      <div className={styles.quote_section}>
        <span className={styles.quote}>
          <FaQuoteLeft />
        </span>
        <h6>{short_dummy_text}</h6>
        <br />
        <br />
        <br />
        <h5>__</h5>
        <h4 className={styles.quote_author}>JASON SANTA MARIA</h4>
      </div>
      <h6>
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s.
        </span>
        <br />
        <br /> {dummy_text}
      </h6>
      <div className={styles.author_section}>
        <div className={styles.top_flex}>
          <img
            src={
              "https://brando.themezaa.com/wp-content/uploads/2020/10/avatar.jpg"
            }
            alt="author pic"
          />
          <div>
            <h3>about the author</h3>
            <h5>admin</h5>
            <h6>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </h6>
          </div>
        </div>
      </div>
      <SocialLinks />
      <div className={styles.bottom_separator}>{}</div>
      <h1 className={styles.comment_heading}>Leave a comment</h1>
      <div className={styles.contact_form}>
        <Form type="blogs" id={id} />
      </div>
      <Comments
        {...result}
        subscribeToNewComments={() =>
          subscribeToMore({
            document: newComment,
            variables: { postId: id },
            updateQuery: (prev, { subscriptionData }) => {
              if (!subscriptionData.data) {
                return prev;
              }
              // if (subscriptionData.data) {
              //   console.log(
              //     "in subscribeToMoreFunction",
              //     subscriptionData.data.comment,
              //     prev.getComments.comments
              //   );
              // }
              const newFeedItem = subscriptionData.data.comment;
              return Object.assign({}, prev, {
                getComments: {
                  comments: [newFeedItem, ...prev.getComments.comments],
                },
              });
            },
          })
        }
        id={id}
        // comments={!commentLoading && data && data.getComments.comments}
      />
      {result.data &&
        result.data.getComments.comments.map(
          ({ name, email, text, id: commentID, postID }) => {
            return (
              <div className={styles.author_section} key={commentID}>
                <div className={styles.top_flex}>
                  <div className={styles.comment_img}>
                    {name.slice(0, 1).toUpperCase()}
                  </div>

                  <div>
                    <h3>{name}</h3>
                    <h5 style={{ textTransform: "lowercase" }}>{email}</h5>
                    <h6 style={{ margin: "1em 0 0 0" }}>{text}</h6>
                  </div>
                </div>
              </div>
            );
          }
        )}
    </div>
  );
}
