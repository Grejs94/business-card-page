import React from "react";

import { SectionTitle } from "pages/ProgramingPage/styles";

import DotsComponent from "./components/DotsComponent";
import { dotsArray, additionalSkills } from "./helper";
import * as Styles from "./styles";

export const DotsList = () => {
  return (
    <>
      <SectionTitle id="TechStack">Technologie</SectionTitle>
      {dotsArray.map((dotsComponent) => (
        <DotsComponent key={dotsComponent.text} dots={dotsComponent.dots}>
          {dotsComponent.text}
        </DotsComponent>
      ))}
      <p>Dodatkowe umiejetności:</p>
      {additionalSkills.map((skill) => (
        <div key={skill.skill}>
          <Styles.AdditionalSkill>{`- ${skill.skill}`}</Styles.AdditionalSkill>
          {skill.info ? (
            <Styles.SkillInfo>{skill.info}</Styles.SkillInfo>
          ) : null}
        </div>
      ))}
    </>
  );
};

export default DotsList;
