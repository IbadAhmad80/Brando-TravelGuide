import React from "react";
import styles from "./slider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { NetworkStatus, useMutation, useQuery } from "@apollo/client";
import { getBlogs } from "../query";
import { useHistory } from "react-router-dom";
import { updateViews } from "../mutations";
import { convertDateFromTimeStamps, Slidersettings } from "./BlogsContent";

export default function BlogSlider() {
  //getting all blogs
  const { loading, data, networkStatus } = useQuery(getBlogs, {
    variables: { default: true, notifyOnNetworkStatusChange: true },
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-and-network",
  });

  if (networkStatus === NetworkStatus.refetch) console.log("Refetching!");

  return loading ? (
    <div
      style={{
        textAlign: "center",
        color: "white",
        fontSize: "25px",
        margin: "2.8em auto",
      }}
    >
      Loading ...
    </div>
  ) : (
    <div className={styles.carousel_container}>
      <Slider {...Slidersettings}>
        {data &&
          data.blogs.map((blogs, index) => {
            return <SingleBlog {...blogs} key={blogs.id} count={index + 1} />;
          })}
      </Slider>
    </div>
  );
}

function SingleBlog(blog, { count }) {
  const history = useHistory();
  const [updateBlogViews] = useMutation(updateViews);

  const handleBlogClick = () => {
    updateBlogViews({
      variables: { id: blog.id },
    }).then(() => {
      history.push({
        pathname: `./blogs/${blog.title.replaceAll(" ", "-")}`,
        blog,
        date: convertDateFromTimeStamps(blog.date),
      });
    });
  };

  return (
    <div className={styles.blog}>
      <span>
        <img src={blog.image} alt="blog pic" />
        <h5 className={styles.published_date}>
          {convertDateFromTimeStamps(blog.date)}
        </h5>
      </span>

      <h5 className={styles.id}>0{blog.count}</h5>
      <h3 className={styles.title} onClick={() => handleBlogClick()}>
        {blog.title}
      </h3>
      <div className={styles.author}>Posted by Admin</div>
    </div>
  );
}
