import React from "react";
import "./gallery.css";
import image from "../../assets/pkg-0.jpg";
import image1 from "../../assets/pkg-1.jpg";
import image2 from "../../assets/pkg-2.jpg";
import image3 from "../../assets/pkg-3.jpg";
import image4 from "../../assets/pkg-4.jpg";
import image5 from "../../assets/pkg-5.jpg";
import image6 from "../../assets/pkg-6.jpg";
import image7 from "../../assets/pkg-7.jpg";
import image8 from "../../assets/pkg-8.jpg";
import image9 from "../../assets/pkg-9.jpg";
import image10 from "../../assets/pkg-10.jpg";
import image11 from "../../assets/pkg-11.jpg";

export default function Gallery() {
  const [selectedCategory, setSelectedCatgeory] = React.useState("honeymoon");
  const [activePackages, setActivePackages] = React.useState(packages);

  React.useEffect(() => {
    document.querySelector(".active").classList.remove("active");
    document.querySelector(`.${selectedCategory}`).classList.add("active");
    ActivePackages(selectedCategory);
  }, [selectedCategory]);

  const ActivePackages = (category) => {
    if (category === "all") return setActivePackages(packages);
    const filteredpackages = packages.filter((pkg) => {
      return pkg.category === category;
    });
    setActivePackages(filteredpackages);
  };

  return (
    <div>
      <div className="wrapper">
        <nav>
          <div className="items">
            <span
              className="item all"
              onClick={() => setSelectedCatgeory("all")}
            >
              All
            </span>
            <span
              className="item family"
              onClick={() => setSelectedCatgeory("family")}
            >
              family
            </span>

            <span
              className="item holiday"
              onClick={() => setSelectedCatgeory("holiday")}
            >
              holiday
            </span>
            <span
              className="item safari"
              onClick={() => setSelectedCatgeory("safari")}
            >
              safari
            </span>
            <span
              className="item active honeymoon"
              onClick={() => setSelectedCatgeory("honeymoon")}
            >
              honeymoon
            </span>
          </div>
        </nav>

        <div className="gallery">
          {activePackages.map(({ id, image }) => {
            return <SinglePackage key={id} image={image} />;
          })}
        </div>
      </div>

      <div className="shadow"></div>
    </div>
  );
}

function SinglePackage({ image }) {
  return (
    <div>
      <div className="image">
        <span>
          <img src={image} alt="" width={320} height={250} />
        </span>
      </div>
      <div className="package-content">
        <h5 className="package-title">Thailand Special</h5>
        <h5 className="package-detail">4 DAYS / 5 NIGHTS - $1500 (22% OFF)</h5>
        <button className="package-explore-now-btn">Explore Now</button>
      </div>
    </div>
  );
}

// packages dummy data

const packages = [
  {
    id: "1",
    image: image,
    category: "holiday",
  },
  {
    id: "2",
    image: image1,
    category: "holiday",
  },
  {
    id: "3",
    image: image2,
    category: "holiday",
  },
  {
    id: "4",
    image: image3,
    category: "holiday",
  },
  {
    id: "5",
    image: image4,
    category: "honeymoon",
  },
  {
    id: "6",
    image: image5,
    category: "honeymoon",
  },
  {
    id: "7",
    image: image6,
    category: "honeymoon",
  },
  {
    id: "8",
    image: image7,
    category: "safari",
  },
  {
    id: "9",
    image: image8,
    category: "family",
  },
  {
    id: "10",
    image: image9,
    category: "family",
  },
  {
    id: "11",
    image: image10,
    category: "family",
  },
  {
    id: "12",
    image: image11,
    category: "safari",
  },
];
