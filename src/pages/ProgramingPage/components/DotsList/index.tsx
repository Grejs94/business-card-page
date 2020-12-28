import React from "react";

import DotsComponent from "./components/DotsComponent";
import { dotsArray } from "./helper";
import { SectionTitle } from "pages/ProgramingPage/styles";

export const DotsList = () => {
  return (
    <>
      <SectionTitle id="TechStack">Technologie</SectionTitle>
      {dotsArray.map((dotsComponent) => (
        <DotsComponent key={dotsComponent.text} dots={dotsComponent.dots}>
          {dotsComponent.text}
        </DotsComponent>
      ))}
    </>
  );
};

export default DotsList;
