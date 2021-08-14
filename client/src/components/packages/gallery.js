import { useQuery } from "@apollo/client";
import React from "react";
import { getPackages } from "../query";
import { useHistory } from "react-router-dom";
import "./gallery.css";

export default function Gallery() {
  const { loading, data } = useQuery(getPackages);
  const [selectedCategory, setSelectedCatgeory] = React.useState("holidays");
  const [activePackages, setActivePackages] = React.useState(null);

  React.useEffect(() => {
    if (!loading) {
      document.querySelector(".active").classList.remove("active");
      document.querySelector(`.${selectedCategory}`).classList.add("active");
      if (selectedCategory === "all") return setActivePackages(data.packages);
      const filteredpackages = data.packages.filter(({ category }) => {
        return category.includes(selectedCategory);
      });
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
              className="item active honeymoon"
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
              pathname: `./packages/${title}`,
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
