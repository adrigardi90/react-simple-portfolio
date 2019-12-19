import * as React from "react";

import "./Home.scss";

export const HomeView = (props: any) => {
  return (
    <div className="home">
      <div className="home__title">
        <div className="main-container">
          <h1 className="skeleton">{props.data && props.data.title}</h1>
          <div className="separator"></div>
          <h3 className="skeleton">{props.data && props.data.subtitle}</h3>
        </div>
      </div>

      <div className="home__team">
        <div className="main-container">
          <h3 className="skeleton">{props.data && props.data.team_subtitle}</h3>
        </div>
      </div>

      <div className="home__bottom">
        <div className="main-container">
          <h1 className="skeleton">{props.data && props.data.bottom__title}</h1>
          <p className="skeleton">
            {props.data && props.data.bottom__subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};
