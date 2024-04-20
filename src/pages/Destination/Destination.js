import { useEffect, useState } from "react";

import classes from "./Destination.module.scss";
import useFetchData from "../../hooks/useFetchData";

const Destination = () => {
  const { data: destinations, error } = useFetchData(
    "/data.json",
    "destinations"
  );

  // console.log(destinations, error);

  const [planetIdx, setPlanetIdx] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  // const [destinations, setDestinations] = useState([]);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch("/data.json")
  //     .then((response) => response.json())
  //     .then((data) => setDestinations(data.destinations))
  //     .catch((error) => console.error("Error fetching data:", error));

  //   setIsLoading(false);
  // }, []);

  const navButtons = destinations.map((destination, index) => {
    return (
      <button
        className={`${classes["upper-case"]} ${
          index === planetIdx ? `${classes.active}` : ""
        }`}
        key={destination.name}
        onClick={() => {
          if (planetIdx === index) return;
          setPlanetIdx(index);
        }}
      >
        {destination.name}
      </button>
    );
  });

  return (
    <div className={classes["main-container"]}>
      {isLoading && <h1>Loading...</h1>}

      {destinations.length > 0 && !isLoading && (
        <div className={classes.wrapper}>
          <div className={classes["page-left"]}>
            <div
              className={`${classes["page-heading"]} ${classes["upper-case"]}`}
            >
              <span>01</span> Pick your destination
            </div>
            <img
              className={classes["destination-img"]}
              src={`${destinations[planetIdx].images.png}`}
              alt="Destination planet"
            />
          </div>
          <div className={classes["page-right"]}>
            <div className={classes["right-wrapper"]}>
              <span className={classes["nav-btns"]}>{navButtons}</span>
              <div className={classes["destination-details-wrapper"]}>
                <h1 className={`${classes["upper-case"]}`}>
                  {destinations[planetIdx].name}
                </h1>
                <p>{destinations[planetIdx].description}</p>
              </div>
              <div
                className={`${classes["destination-travel-info"]} ${classes["upper-case"]}`}
              >
                <div>
                  <span className={classes["travel-info-heading"]}>
                    Avg. Distance
                  </span>
                  <span className={classes["travel-telemetrics"]}>
                    {destinations[planetIdx].distance}
                  </span>
                </div>
                <div>
                  <span className={classes["travel-info-heading"]}>
                    Est. Time Travel
                  </span>
                  <span className={classes["travel-telemetrics"]}>
                    {destinations[planetIdx].travel}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {!isLoading && destinations.length === 0 && (
        <h2 className={classes["error-msg"]}>
          No destinations at the moment! Try again later.
        </h2>
      )}
    </div>
  );
};

export default Destination;
