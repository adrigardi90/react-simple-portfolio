import * as React from "react";
import Grid from "@material-ui/core/Grid";

import "./PageStructure.scss";
import { Card } from "./components/Card";
import { Pages } from "./../../routes/routes.interface";
import { isSafari } from '../../utils/utils'
import projectBkg from "./../../styles/assets/projects_bck.webp"
import postBkg from "./../../styles/assets/post_bck.webp"
import projectBkgPng from "./../../styles/assets/projects_bck.png"
import postBkgPng from "./../../styles/assets/post_bck.png"

export const PageStructure = (page: Pages) => (props: any) => {

  const backgroundStyle = {
    backgroundImage: !isSafari() ?
      `url(${page === Pages.Projects ? projectBkg : postBkg})` :
      `url(${page === Pages.Projects ? projectBkgPng : postBkgPng})` 
  };

  return (
    <div className="projects">
      <div className="background" style={backgroundStyle}>
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
              props.data[page.toLowerCase()].map((project: any, index: number) => (
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