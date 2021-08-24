import { useQuery } from "@apollo/client";
import React from "react";
import { getPackages } from "../query";
import { useHistory } from "react-router-dom";

// import Shuffle from "react-shuffle";
import "./gallery.css";

export default function Gallery() {
  const { loading, data } = useQuery(getPackages);
  const [selectedCategory, setSelectedCatgeory] = React.useState("honeymoon");
  const [activePackages, setActivePackages] = React.useState(null);

  React.useEffect(() => {
    if (!loading) {
      //getting the active category
      document.querySelector(".active").classList.remove("active");
      //removing the active category
      document.querySelector(`.${selectedCategory}`).classList.add("active");
      // if cateogry is all then return packages from all categories
      if (selectedCategory === "all") return setActivePackages(data.packages);
      // if its other than all only return packages from that category
      const filteredpackages = data.packages.filter(({ category }) => {
        return category.includes(selectedCategory);
      });
      // setting packages accroding to the active category
      setActivePackages(filteredpackages);
    }
  }, [selectedCategory, loading, data]);

  return loading ? (
    <div>Loading</div>
  ) : (
    <div>
      <div className="wrapper">
        <nav>
          <div className="items">
            <span
              className="item all "
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
              className="item holidays"
              onClick={() => setSelectedCatgeory("holidays")}
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
              className="item  honeymoon active"
              onClick={() => setSelectedCatgeory("honeymoon")}
            >
              honeymoon
            </span>
          </div>
        </nav>

        <div className="gallery">
          {activePackages &&
            activePackages.map(({ id, image, title, description, detail }) => {
              return (
                <SinglePackage
                  key={id}
                  image={image}
                  title={title}
                  description={description}
                  detail={detail}
                />
              );
            })}
        </div>
      </div>

      <div className="shadow"></div>
    </div>
  );
}

function SinglePackage({ image, title, description, detail }) {
  const history = useHistory();
  return (
    <div>
      <div className="image">
        <span>
          <img src={image} alt="" width={320} height={260} />
        </span>
      </div>
      <div className="package-content">
        <h5 className="package-title">{title}</h5>
        <h5 className="package-detail">{description}</h5>
        <button
          className="package-explore-now-btn"
          onClick={() =>
            history.push({
              pathname: `./packages/${title.replaceAll(" ", "-")}`,
              title: title,
              detail: detail,
              description: description,
            })
          }
        >
          Explore Now
        </button>
      </div>
    </div>
  );
}
