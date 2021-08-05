import React from "react";
import styles from "./slider.module.css";
import Carousel, {
  slidesToShowPlugin,
  autoplayPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import image from "../../assets/pkg-2.jpg";
import image1 from "../../assets/blog-1.jpg";
import image2 from "../../assets/blog-2.jpg";
import image3 from "../../assets/blog-3.jpg";
import image4 from "../../assets/blog-4.jpg";
import image5 from "../../assets/blog-5.jpg";
import image6 from "../../assets/blog-6.jpg";

export default function BlogSlider() {
  return (
    <div className={styles.carousel_container}>
      <Carousel
        plugins={[
          "infinite",
          {
            resolve: autoplayPlugin,
            options: {
              interval: 4000,
            },
          },
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 4,
            },
          },
        ]}
        breakpoints={{
          1340: {
            plugins: [
              "infinite",
              {
                resolve: autoplayPlugin,
                options: {
                  interval: 3000,
                },
              },
              {
                resolve: slidesToShowPlugin,

                options: {
                  numberOfSlides: 3,
                },
              },
            ],
          },
          1020: {
            plugins: [
              "infinite",
              {
                resolve: autoplayPlugin,
                options: {
                  interval: 3000,
                },
              },
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 2,
                },
              },
            ],
          },

          685: {
            plugins: [
              "infinite",
              {
                resolve: autoplayPlugin,
                options: {
                  interval: 3000,
                },
              },
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1,
                },
              },
            ],
          },
        }}
        animationSpeed={800}
      >
        <SingleBlog
          title={"TRAVEL AND THE ART OF LOSING"}
          img={image}
          id={"1"}
        />
        <SingleBlog
          title={"TRAVEL AND THE ART OF LOSING"}
          img={image1}
          id={"2"}
        />
        <SingleBlog
          title={"TRAVEL AND THE ART OF LOSING"}
          img={image2}
          id={"3"}
        />
        <SingleBlog
          title={"TRAVEL AND THE ART OF LOSING"}
          img={image3}
          id={"4"}
        />
        <SingleBlog
          title={"TRAVEL AND THE ART OF LOSING"}
          img={image4}
          id={"5"}
        />
        <SingleBlog
          title={"TRAVEL AND THE ART OF LOSING"}
          img={image5}
          id={"6"}
        />
        <SingleBlog
          title={"TRAVEL AND THE ART OF LOSING"}
          img={image6}
          id={"7"}
        />
      </Carousel>
    </div>
  );
}

function SingleBlog({ title, id, img }) {
  return (
    <div className={styles.blog}>
      <img src={img} alt="blog pic" />
      <h5 className={styles.published_date}>26 JUNE , 2016</h5>
      <h5 className={styles.id}>0{id}</h5>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.author}>Posted by Admin</div>
    </div>
  );
}
