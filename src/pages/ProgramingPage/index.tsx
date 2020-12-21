import React from "react";

import { DotsList, Projects } from "./components";

import * as Styled from "./styles";

const ProgramingPage = () => {
  return (
    <Styled.Wrapper>
      <Styled.TechStackSectionContainer>
        <DotsList />
      </Styled.TechStackSectionContainer>
      <Styled.ProjectsSectionContainer>
        <Projects />
      </Styled.ProjectsSectionContainer>
    </Styled.Wrapper>
  );
};

export default ProgramingPage;
