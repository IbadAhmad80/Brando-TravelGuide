import { useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../navbar";
import { getBlogs } from "../query";
import styles from "./blog-category.module.css";
import RightWrapper from "./right-wrapper";
import { useHistory } from "react-router";
import { convertDateFromTimeStamps } from "./BlogsContent";

export default function BlogCategory({ location: { type, name } }) {
  //getting blogs for any tag or category or acheived month
  const { loading, data } = useQuery(getBlogs, {
    variables: { [type]: name },
  });

  //scroll to top of page during navigation
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return loading ? (
    <div
      style={{
        textAlign: "center",
        fontSize: "35px",
        margin: "8em auto",
        color: "white",
      }}
    >
      Loading ...
    </div>
  ) : (
    <div className={styles.container}>
      <div className={styles.hero_wrapper}>
        <NavBar />
        <div className={styles.hero_container}>
          <h2 className={styles.hero_title}>{name}</h2>

          <h6 className={styles.hero_description}>{type}</h6>
        </div>
      </div>
      <div className={styles.navigation_panel}>
        <Link to="/">
          <span>HOME</span>
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp; {name}
      </div>
      <div className={styles.details_wrapper}>
        <div className={styles.left_wrapper}>
          {data &&
            data.blogs.map((blog) => {
              return <LeftContainer blog={blog} name={name} key={blog.id} />;
            })}
        </div>
        <div className={styles.right_wrapper}>
          <RightWrapper type={"category and tag"} />
        </div>
      </div>
    </div>
  );
}

function LeftContainer({ blog, name }) {
  const history = useHistory();

  return (
    <div>
      <div className={styles.date_wrapper}>
        <h5>
          {new Date(parseFloat(blog.date)).toLocaleString("en-US", {
            day: "numeric",
          })}
          <br />
          <span>
            {new Date(parseFloat(blog.date))
              .toLocaleString("en-US", {
                month: "long",
              })
              .slice(0, 3)}
            &nbsp;
            {new Date(parseFloat(blog.date)).toLocaleString("en-US", {
              year: "numeric",
            })}
          </span>
        </h5>
      </div>
      <div className={styles.description_wrapper}>
        <h4>{blog.title}</h4>
        <img src={blog.image} alt="blog pic" />
        <h6>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's...
        </h6>
        <h3>BLOG &nbsp;&nbsp;/&nbsp;&nbsp; {name}</h3>
        <button
          onClick={(e) => {
            e.preventDefault();
            history.push({
              pathname: `/blogs/${blog.title.replaceAll(" ", "-")}`,
              blog,
              date: convertDateFromTimeStamps(blog.date),
            });
          }}
        >
          Continue Reading
        </button>
      </div>
    </div>
  );
}
