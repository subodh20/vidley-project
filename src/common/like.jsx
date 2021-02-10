import React, { Component } from "react";

const Like = (props) => {
  let classes = "fa fa-heart";
  console.log("check");
  if (!props.liked) classes += "-o";
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={classes}
    ></i>
  );
};
export default Like;
