import { useEffect, useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import classes from "./Technology.module.scss";

const Techology = () => {
  const [isLoading, setIsLoading] = useState(false);
  // const [crewList, setCrewList] = useState([]);
  const [technologyIndex, setTechnologyIndex] = useState(0);

  const { data: technologyList, error } = useFetchData(
    "/data.json",
    "technology"
  );

  console.log(technologyList, error);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch("/data.json")
  //     .then((response) => response.json())
  //     .then((data) => setCrewList(data.crew))
  //     .catch((error) => console.error("Error fetching data:", error));

  //   setIsLoading(false);
  // }, []);

  const navButtons = technologyList.map((crew, index) => {
    return (
      <button
        className={`${index === technologyIndex ? `${classes.active}` : ""}`}
        key={crew.name}
        onClick={() => {
          if (technologyIndex === index) return;
          setTechnologyIndex(index);
        }}
      >
        {index + 1}
      </button>
    );
  });

  return (
    <div className={classes["main-container"]}>
      {/* {isLoading && <h1>Loading...</h1>} */}

      {technologyList.length > 0 && !isLoading && (
        <div className={classes.wrapper}>
          <div className={classes["page-left"]}>
            <div
              className={`${classes["page-heading"]} ${classes["upper-case"]}`}
            >
              <span>03</span> Space Launch 101
            </div>
            <div className={classes["left-wrapper"]}>
              <span className={classes["nav-btns"]}>{navButtons}</span>

              <div className={classes["technology-details-wrapper"]}>
                <span className={`${classes["upper-case"]}`}>
                  The Terminology...
                </span>
                <h1 className={`${classes["upper-case"]}`}>
                  {technologyList[technologyIndex].name}
                </h1>
                <p>{technologyList[technologyIndex].description}</p>
              </div>
            </div>
          </div>
          <div className={classes["page-right"]}>
            {/* <div className={classes["right-wrapper"]}> */}

            <picture>
              <source
                media="(max-width: 63.9em)"
                srcset={`${technologyList[technologyIndex].images.landscape}`}
              />
              <source
                media="(min-width: 800px)"
                srcset={`${technologyList[technologyIndex].images.portrait}`}
              />
              <img
                className={classes["tech-img"]}
                src={`${technologyList[technologyIndex].images.portrait}`}
                alt={`${technologyList[technologyIndex].name}`}
              />
            </picture>
          </div>
          {/* </div> */}
        </div>
      )}
      {!isLoading && technologyList.length === 0 && (
        <h2 className={classes["error-msg"]}>
          Unable to fetch crew deails at the moment! Try again later.
        </h2>
      )}
    </div>
  );
};

export default Techology;
