import React from "react";
import styles from "./package-detail.module.css";
import { AiFillCloseSquare } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import PackageCarousel from "./carousel";

export default function PackageDetail({
  location: { title, detail, description },
}) {
  const history = useHistory();

  //scroll to top of page during navigation
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.detail_container}>
      <div className={styles.carousel}>
        <PackageCarousel title={title} description={description} />
      </div>
      <div className={styles.detail_wrapper}>
        <div
          className={styles.close_icon}
          onClick={() =>
            history.push({
              pathname: `/`,
            })
          }
        >
          <AiFillCloseSquare />
        </div>
        <PackageInformation detail={detail} />
      </div>
    </div>
  );
}

function PackageInformation({ detail }) {
  return (
    <div className={styles.information_container}>
      <h5>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum is simply dummy text.
      </h5>
      <h6>{detail}</h6>
      <div className={styles.separator}>{}</div>
      <li>
        <ol>
          <h4>Day&nbsp;1</h4>
          <h6>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text.
          </h6>
        </ol>
        <ol>
          <h4>Day&nbsp;2</h4>
          <h6>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text.
          </h6>
        </ol>
        <ol>
          <h4>Day&nbsp;3</h4>
          <h6>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text.
          </h6>
        </ol>
        <ol>
          <h4>Day&nbsp;4</h4>
          <h6>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text.
          </h6>
        </ol>
        <ol>
          <h4>Day&nbsp;5</h4>
          <h6>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text.
          </h6>
        </ol>
      </li>
    </div>
  );
}
