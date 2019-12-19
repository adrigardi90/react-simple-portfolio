import * as React from "react";
import Grid from "@material-ui/core/Grid";

import "./Projects.scss";
import { Card } from "./components/Card";

export const ProjectsView = (props: any) => {
  return (
    <div className="projects">
      <div className="background">
        <div className="projects__title">
          <div className="main-container">
            <p className="skeleton">{props.data && props.data.title}</p>
          </div>
        </div>
        <div className="projects__subtitle">
          <div className="main-container">
            <p className="skeleton">{props.data && props.data.subtitle}</p>
          </div>
        </div>
      </div>
      <div className="projects__cards">
        <div className="main-container">
          <Grid container spacing={5}>
            {props.data &&
              props.data.projects.map((project: any, index: number) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  className="container"
                  key={index}
                >
                  <Card {...project} />
                </Grid>
              ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};
