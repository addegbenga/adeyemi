import React from "react";
import gif from "../img/807.gif"

export default function Loading() {
  return (
    <div className="loading-container">
      <img
        src={gif}
        alt="loading"
      ></img>
      
    </div>
  );
}
