import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./carousel.css";
import carousel_1 from "../../assets/carousel-1.jpg";
import carousel_2 from "../../assets/carousel-2.jpg";
import carousel_3 from "../../assets/carousel-3.jpg";

export default function HomeCarousel() {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      showArrows={false}
      showThumbs={false}
    >
      <div className="carousel-items" id="1">
        <img src={carousel_1} alt="carausel pic 1" />
        <div className="carousel-description-container">
          <CarouselItemDescription
            title={"adventure experiences"}
            description={
              "Travel far from the busy world we live in to the unspoiled natural beauty of Africa and other Asian destinations."
            }
          />
          {/* <img src={asset3} alt="carausel pic 1" /> */}
        </div>
      </div>
      <div className="carousel-items" id="2">
        <img src={carousel_2} alt="carausel pic 2" />

        <div className="carousel-description-container">
          <CarouselItemDescription
            title={"enjoying wilderness"}
            description={
              "Wildlife tourism can be an eco and animal friendly tourism, usually showing animals in their natural habitat."
            }
          />
          {/* <img src={asset2} alt="carausel pic 2" /> */}
        </div>
      </div>
      <div className="carousel-items" id="3">
        <img src={carousel_3} alt="carausel pic 3" />

        <div className="carousel-description-container">
          <CarouselItemDescription
            title={"outdoor camping"}
            description={
              "Camping is an elective outdoor recreational activity. Generally held, participants leave developed areas to spend time."
            }
          />
          {/* <img src={asset1} alt="carausel pic 3" /> */}
        </div>
      </div>
    </Carousel>
  );
}

function CarouselItemDescription({ title, description }) {
  return (
    <div>
      <h5 className="title">{title}</h5>
      <h2 className="separation-bar">{}</h2>
      <h3 className="description">{description}</h3>
      <button className="explore-now-btn">Explore Now</button>
    </div>
  );
}
