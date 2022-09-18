import React, { Component } from "react";

import SvgIcon from "@material-ui/core/SvgIcon";

import { ReactComponent as MySvg } from "./../../../styles/assets/medium.svg";

export default function MediumIcon({ onClick }: any) {
  return (
    <span onClick={onClick}>
      <SvgIcon viewBox="0 0 256 256">
        <MySvg></MySvg>
      </SvgIcon>
    </span>
  );
}
