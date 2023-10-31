// import React from "react";
import { Link } from "react-router-dom";

function HomePageNavButton(props) {
  return (
    <>
      <Link
        className="homePage-Nav-Button text-center flex gap-3"
        to={props?.link}
        style={{ backgroundColor: "#7091F5" }}
      >
        <span>{props?.icon}</span> <span>{props?.title}</span>
      </Link>
    </>
  );
}

export default HomePageNavButton;
