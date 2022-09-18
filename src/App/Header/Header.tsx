import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

import "./Header.scss";
import { AppRoute } from "../../routes/routes.interface";
import { Link } from "react-router-dom";
import { openNewTab } from "../../utils/utils";
import MediumIcon from "./Medium/Medium";

interface Props {
  openMenu: (e: any) => any;
  opened: boolean;
  routes: AppRoute[];
  home: boolean;
}

export const Header = (props: Props) => {
  return (
    <header className={"header " + (props.home ? "light" : "dark")}>
      <div className="main-container">
        <Icon onClick={props.openMenu} className="header__menu">
          {props.opened ? "close" : "menu"}
        </Icon>
        <div className="header__options">
          <div className="media">
            <LinkedInIcon
              onClick={openNewTab("https://www.linkedin.com/in/adrigardi90/")}
            />
            <GitHubIcon
              onClick={openNewTab("https://github.com/adrigardi90")}
            />
            <MediumIcon
              onClick={openNewTab("https://medium.com/@adrigardi90")}
            />
            <TwitterIcon
              onClick={openNewTab("https://twitter.com/adrigardi90")}
            />
          </div>
          <div className="menu">
            {props.routes.map((route: AppRoute, index: number) => (
              <div className="entry" key={route.name}>
                {index !== 0 && <span>/</span>}
                <div>
                  <Link to={route.path}>{route.name.toUpperCase()}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
