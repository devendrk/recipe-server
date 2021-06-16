import React from "react";
import "./Section.scss";

const Section = ({ children }) => {
  return <div className="section__container">{children}</div>;
};

export default Section;
