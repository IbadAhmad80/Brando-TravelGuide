import React from "react";
import styles from "./blog-details.module.css";
import styles1 from "./blog-category.module.css";
import { useQuery } from "@apollo/client";
import { getBlogs } from "../query";
import { AiOutlineSearch } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";
import { convertDateFromTimeStamps } from "./BlogsContent";

export default function RightWrapper({ tags, type }) {
  const history = useHistory();
  const [searchedTitle, setSearchedTitle] = React.useState("");
  const [lazyQueryFetching, setLazyQueryFetching] = React.useState(false);

  //fetching data for most recent blogs
  const { loading: dateLoading, data: dateData } = useQuery(getBlogs, {
    variables: { date: true },
  });

  //fetching data for most popular blogs
  const { dateLoading: viewsLoading, data: viewsData } = useQuery(getBlogs, {
    variables: { views: true },
  });

  //setting up lazy query on serach by title
  const [getSearchedBlog, { called, loading: titleLoading, data }] =
    useLazyQuery(getBlogs, {
      // fetchPolicy: "network-only",
    });

  //navigating to blog details page upon clicking on popular and recent blogs
  const handleClickEvent = (e, blog) => {
    e.preventDefault();
    history.push({
      pathname: `/blogs/${blog.title.replaceAll(" ", "-")}`,
      blog,
      date: convertDateFromTimeStamps(blog.date),
    });
  };

  //categories for the posts
  const [categories] = React.useState([
    "Pacific",
    "Jungle",
    "Beach",
    "Uncategorized",
  ]);

  //months from which user can get blogs
  const [archives] = React.useState(["July", "June", "March", "January"]);

  //calling query for against search title
  const handleSearchedBlog = () => {
    getSearchedBlog({
      variables: { title: searchedTitle },
      result: {
        data: true,
      },
    });
    setLazyQueryFetching(true);
  };

  //doing searched title navigation only single time
  if (called && !titleLoading && lazyQueryFetching) {
    setLazyQueryFetching(false);
    setSearchedTitle("");
    const blog = {
      title: data.blogs[0].title,
      tags: data.blogs[0].tags,
      image: data.blogs[0].image,
      id: data.blogs[0].id,
      comments: data.blogs[0].comments,
    };

    //checking whether it was valid or unvalid title
    data.blogs.length === 0
      ? alert("invalid title , try again")
      : history.push({
          pathname: `/blogs/${data.blogs[0].title.replaceAll(" ", "-")}`,
          blog,
          date: convertDateFromTimeStamps(data.blogs[0].date),
        });
  }

  return dateLoading && viewsLoading ? (
    <div
      style={{
        textAlign: "center",
        fontSize: "25px",
        margin: "4em auto",
      }}
    >
      Loading ..
    </div>
  ) : (
    <div>
      <div className={type ? styles1.search_wrapper : styles.search_wrapper}>
        <input
          type="text"
          placeholder=" Type Title Here ..."
          value={searchedTitle}
          onChange={(e) => setSearchedTitle(e.target.value)}
        />
        <span
          onClick={(e) => {
            e.preventDefault();
            handleSearchedBlog(e);
          }}
        >
          <AiOutlineSearch />
        </span>
      </div>
      <h5>Recent Posts</h5>
      <h4 className={type ? styles1.border : styles.border}>{}</h4>
      {dateData &&
        dateData.blogs.map((blog) => {
          return (
            <div key={blog.id}>
              <div
                className={type ? styles1.title : styles.title}
                onClick={(e) => handleClickEvent(e, blog)}
              >
                {blog.title}
              </div>
              <div
                className={type ? styles1.title_border : styles.title_border}
              >
                {}
              </div>
            </div>
          );
        })}
      {tags && (
        <div>
          <h5 style={{ marginTop: "5em" }}>Categories</h5>
          <h4 className={type ? styles1.border : styles.border}>{}</h4>
          {categories.map((category, index) => {
            return (
              <div key={index}>
                <div
                  className={type ? styles1.category : styles.category}
                  onClick={(e) => {
                    e.preventDefault();
                    history.push({
                      pathname: `/blogs/category/${category.toLowerCase()}`,
                      type: "category",
                      name: category,
                    });
                  }}
                >
                  {category}
                </div>
                <div
                  className={
                    type ? styles1.category_border : styles.category_border
                  }
                >
                  {}
                </div>
              </div>
            );
          })}
        </div>
      )}

      <h5 style={{ marginTop: "5em" }}>Popular Posts</h5>
      <h4 className={type ? styles1.border : styles.border}>{}</h4>
      {viewsData &&
        viewsData.blogs.map((blog) => {
          return (
            <div key={blog.id}>
              <div
                className={type ? styles1.title : styles.title}
                onClick={(e) => handleClickEvent(e, blog)}
              >
                {blog.title}
              </div>
              <div className={type ? styles1.date : styles.date}>
                {convertDateFromTimeStamps(blog.date, true)}
              </div>
              <div
                className={type ? styles1.title_border : styles.title_border}
              >
                {}
              </div>
            </div>
          );
        })}
      {tags && (
        <div>
          <h5 style={{ marginTop: "5em" }}> Blog Tags</h5>
          <h4 className={type ? styles1.border : styles.border}>{}</h4>
          {tags &&
            tags.map((tag, index) => {
              return (
                <h4
                  key={index}
                  className={type ? styles1.tag : styles.tag}
                  onClick={(e) => {
                    e.preventDefault();
                    history.push({
                      pathname: `/blogs/tags/${tag.toLowerCase()}`,
                      type: "tag",
                      name: tag,
                    });
                  }}
                >
                  {tag}
                </h4>
              );
            })}
        </div>
      )}
      {tags && (
        <div>
          <h5 style={{ marginTop: "5em" }}>Archives</h5>
          <h4 className={type ? styles1.border : styles.border}>{}</h4>
          {archives.map((month, index) => {
            return (
              <div key={index}>
                <div
                  className={type ? styles1.month : styles.month}
                  onClick={(e) => {
                    e.preventDefault();
                    history.push({
                      pathname: `/blogs/archives/${month.toLowerCase()}`,
                      type: "month",
                      name: month,
                    });
                  }}
                >
                  {month} 2021
                </div>
                <div
                  className={
                    type ? styles1.category_border : styles.category_border
                  }
                >
                  {}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
