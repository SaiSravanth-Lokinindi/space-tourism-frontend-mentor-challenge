import { useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import classes from "./Crew.module.scss";

const Crew = () => {
  const [isLoading, setIsLoading] = useState(false);
  // const [crewList, setCrewList] = useState([]);
  const [crewIndex, setCrewIndex] = useState(0);

  const { data: crewList, error } = useFetchData("/data.json", "crew");

  // console.log(crewList, error);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch("/data.json")
  //     .then((response) => response.json())
  //     .then((data) => setCrewList(data.crew))
  //     .catch((error) => console.error("Error fetching data:", error));

  //   setIsLoading(false);
  // }, []);

  const navButtons = crewList.map((crew, index) => {
    return (
      <button
        className={`${index === crewIndex ? `${classes.active}` : ""}`}
        key={crew.name}
        onClick={() => {
          if (crewIndex === index) return;
          setCrewIndex(index);
        }}
      ></button>
    );
  });

  return (
    <div className={classes["main-container"]}>
      {/* {isLoading && <h1>Loading...</h1>} */}

      {crewList.length > 0 && !isLoading && (
        <div className={classes.wrapper}>
          <div className={classes["page-left"]}>
            {/* <div className={classes["left-wrapper"]}> */}
            <div
              className={`${classes["page-heading"]} ${classes["upper-case"]}`}
            >
              <span>02</span> Meet your crew
            </div>

            <div className={classes["crew-details-wrapper"]}>
              <span className={`${classes["upper-case"]}`}>
                {crewList[crewIndex].role}
              </span>
              <h1 className={`${classes["upper-case"]}`}>
                {crewList[crewIndex].name}
              </h1>
              <p>{crewList[crewIndex].bio}</p>
            </div>

            <span className={classes["nav-btns"]}>{navButtons}</span>
            {/* </div> */}
          </div>
          <div className={classes["page-right"]}>
            {/* <div className={classes["right-wrapper"]}> */}

            <picture>
              <source
                srcSet={`${crewList[crewIndex].images.webp}`}
                type="image/webp"
              />
              <img
                className={classes["crew-img"]}
                src={`${crewList[crewIndex].images.png}`}
                alt={`Astronaut ${crewList[crewIndex].name}`}
              />
            </picture>
          </div>
          {/* </div> */}
        </div>
      )}
      {!isLoading && crewList.length === 0 && (
        <h2 className={classes["error-msg"]}>
          Unable to fetch crew deails at the moment! Try again later.
        </h2>
      )}
    </div>
  );
};

export default Crew;
