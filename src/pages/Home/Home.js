// import {useNavi} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

import classes from "./Home.module.scss";
function Home() {
  const navigate = useNavigate();

  return (
    <div className={classes["main-container"]}>
      <div className={classes.wrapper}>
        <div className={classes["details-container"]}>
          <div className={classes["details-wrapper"]}>
            <h1>SO, YOU WANT TO TRAVEL TO</h1>
            <span>SPACE</span>

            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
        </div>
        <div className={classes["action-container"]}>
          <button type="button" onClick={() => navigate("/destination")}>
            EXPLORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
